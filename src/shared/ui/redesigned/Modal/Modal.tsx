import { memo, ReactNode, useCallback, useMemo } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { Overlay } from "../../redesigned/Overlay/Overlay";
import { Portal } from "../../redesigned/Portal/Portal";
import classes from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  portal?: boolean;
  lazy?: boolean;
  children?: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

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

  const mods: Mods = useMemo(
    () => ({
      [classes.opened]: isOpen,
      [classes.isClosing]: isClosing,
    }),
    [isClosing, isOpen]
  );

  const renderComponent = useCallback(() => {
    return (
      <div className={classNames(classes.Modal, mods, [className])}>
        <Overlay onClick={closeHandler} />
        <div className={classes.content}>{children}</div>
      </div>
    );
  }, [mods, children, className, closeHandler]);

  if (lazy && !isMounted) return null;

  if (portal) {
    return <Portal>{renderComponent()}</Portal>;
  }

  return renderComponent();
});
