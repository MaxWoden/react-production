import { Menu } from "@headlessui/react";
import { Fragment, memo, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import popupClasses from "../../styles/popup.module.scss";
import classes from "./Dropdown.module.scss";
import { AppLink } from "../../../AppLink/AppLink";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Dropdown = memo((props: DropdownProps) => {
  const { className, items, trigger } = props;

  return (
    <Menu
      as="div"
      className={classNames(classes.Dropdown, {}, [
        className,
        popupClasses.popup,
      ])}
    >
      <Menu.Button className={popupClasses.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classes.menu}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(classes.item, {
                [popupClasses.active]: active,
              })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                key={index}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});
