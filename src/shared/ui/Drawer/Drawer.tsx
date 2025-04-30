import { Portal } from "@headlessui/react";
import { memo, ReactNode, useCallback } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Overlay } from "../Overlay/Overlay";
import classes from "./Drawer.module.scss";

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  portal?: boolean;
  children?: ReactNode;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, portal, isOpen } = props;

  const mods: Mods = {
    [classes.opened]: isOpen,
  };

  const renderComponent = useCallback(
    () => (
      <div className={classNames(classes.Drawer, mods, [className])}>
        <Overlay onClick={onClose} />
        <div className={classes.content}>{children}</div>
      </div>
    ),
    [children, mods]
  );

  if (portal) {
    return <Portal>{renderComponent()}</Portal>;
  }

  return renderComponent();
});
