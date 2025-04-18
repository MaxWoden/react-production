import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import classes from "./Sidebar.module.scss";
import { VStack } from "shared/ui/Stack";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const sidebarItems = useSelector(getSidebarItems);
  const sidebarItemsList = useMemo(
    () =>
      sidebarItems.map((item) => (
        <SidebarItem collapsed={collapsed} key={item.text} item={item} />
      )),
    [sidebarItems]
  );

  return (
    <VStack
      role="menu"
      gap="32"
      dataTestid="sidebar"
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <Button
        className={classes.toggleBtn}
        onClick={onToggle}
        square={true}
        size={ButtonSize.SIZE_XL}
        dataTestid="toggle-btn"
      >
        {collapsed ? ">" : "<"}
      </Button>

      <VStack
        role="navigation"
        max
        align="center"
        className={classes.navbar}
        gap="32"
      >
        {sidebarItemsList}
      </VStack>

      <div className={classes.line}></div>

      <VStack max align="center" gap="16">
        <ThemeSwitcher />
        <LangSwitcher />
      </VStack>
    </VStack>
  );
});
