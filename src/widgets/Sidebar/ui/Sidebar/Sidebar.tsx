import { LangSwitcher } from "@/features/LangSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLogo } from "@/shared/ui/deprecated/AppLogo";
import { Button, ButtonSize } from "@/shared/ui/deprecated/Button";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import classes from "./Sidebar.module.scss";

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
    [sidebarItems, collapsed]
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <VStack
          max
          role="menu"
          gap="32"
          data-testid="sidebar"
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
            data-testid="toggle-btn"
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
            <ThemeSwitcher inverted />
            <LangSwitcher inverted />
          </VStack>
        </VStack>
      }
      on={
        <VStack
          max
          role="menu"
          gap="32"
          data-testid="sidebar"
          className={classNames(
            classes.SidebarRedesigned,
            { [classes.collapsed]: collapsed },
            [className]
          )}
        >
          <AppLogo className={classes.appLogo} />
          <ThemeSwitcher />
        </VStack>
      }
    />
  );
});
