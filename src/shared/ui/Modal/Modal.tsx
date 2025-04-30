import { memo, ReactNode, useCallback } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useModal } from "shared/lib/hooks/useModal/useModal";
import { Overlay } from "../Overlay/Overlay";
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

export const Modal = memo((props: ModalProps) => {
  const { className, children, isOpen, onClose, portal = true, lazy } = props;

  const {
    isMounted,
    isClosing,
    close: closeHandler,
  } = useModal({
    onClose: onClose,
    isOpen: isOpen,
    animationDelay: 300,
  });

  const mods: Mods = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  const renderComponent = useCallback(() => {
    return (
      <div className={classNames(classes.Modal, mods, [className])}>
        <Overlay onClick={closeHandler} />
        <div className={classes.content}>{children}</div>
      </div>
    );
  }, [mods, children]);

  if (lazy && !isMounted) return null;

  if (portal) {
    return <Portal>{renderComponent()}</Portal>;
  }

  return renderComponent();
});
