import { Menu } from "@headlessui/react";
import { Fragment, memo, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "../AppLink/AppLink";
import classes from "./Dropdown.module.scss";

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

export const Dropdown = memo((props: DropdownProps) => {
  const { className, items, trigger } = props;

  return (
    <Menu as="div" className={classNames(classes.Dropdown, {}, [className])}>
      <Menu.Button className={classes.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classes.menu}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(classes.item, {
                [classes.active]: active,
              })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                to={item.href}
                disabled={item.disabled}
                key={index}
                as={AppLink}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item disabled={item.disabled} key={index} as={Fragment}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});
