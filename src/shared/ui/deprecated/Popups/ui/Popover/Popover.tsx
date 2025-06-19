import { Popover as HPopover } from "@headlessui/react";
import { memo, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import popupClasses from "../../styles/popup.module.scss";
import classes from "./Popover.module.scss";

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Popover = memo((props: PopoverProps) => {
  const { className, trigger, children } = props;

  return (
    <HPopover
      as="div"
      className={classNames(classes.MyPopover, {}, [popupClasses.popup])}
    >
      <HPopover.Button className={popupClasses.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(classes.panel, {}, [className])}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
