import { Portal } from "@headlessui/react";
import { memo, ReactNode, useCallback } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useModal } from "shared/lib/hooks/useModal/useModal";
import { Overlay } from "../Overlay/Overlay";
import classes from "./Drawer.module.scss";

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  portal?: boolean;
  lazy?: boolean;
  children?: ReactNode;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, portal, lazy, isOpen } = props;

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

  const renderComponent = useCallback(
    () => (
      <div className={classNames(classes.Drawer, mods, [className])}>
        <Overlay onClick={closeHandler} />
        <div className={classes.content}>{children}</div>
      </div>
    ),
    [children, mods]
  );

  if (lazy && !isMounted) return null;

  if (portal) {
    return <Portal>{renderComponent()}</Portal>;
  }

  return renderComponent();
});
