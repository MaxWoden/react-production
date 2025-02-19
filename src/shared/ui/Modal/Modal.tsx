import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import classes from "./Modal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  portal?: HTMLElement;
  needPortal?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    portal,
    needPortal = true,
  } = props;

  const [isClosing, setIsCLosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

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

  const mods: Record<string, boolean> = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  const renderModal = () => {
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

  return needPortal ? (
    <Portal element={portal}>{renderModal()}</Portal>
  ) : (
    renderModal()
  );
};
