import {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import classes from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  portal?: boolean;
  lazy?: boolean;
  children?: ReactNode;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, portal = true, lazy } = props;

  const [isClosing, setIsCLosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    isOpen && setIsMounted(true);
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsCLosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsCLosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Mods = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  const renderComponent = () => {
    return (
      <div className={classNames(classes.Modal, mods, [className])}>
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    );
  };

  if (lazy && !isMounted) return null;
  if (!portal) return renderComponent();

  return <Portal>{renderComponent()}</Portal>;
};
