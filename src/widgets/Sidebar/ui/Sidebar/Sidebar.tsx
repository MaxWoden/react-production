import { LangSwitcher } from "@/features/LangSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg";
import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  Button as ButtonDeprecated,
  ButtonSize,
} from "@/shared/ui/deprecated/Button";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { AppLogo } from "@/shared/ui/redesigned/AppLogo";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { memo, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import classes from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

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
          <ButtonDeprecated
            className={classes.toggleBtn}
            onClick={onToggle}
            square={true}
            size={ButtonSize.SIZE_XL}
            data-testid="toggle-btn"
          >
            {collapsed ? ">" : "<"}
          </ButtonDeprecated>

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
          <AppLogo size={collapsed ? 30 : 50} className={classes.appLogo} />

          <VStack
            role="navigation"
            max
            align="start"
            className={classes.navbar}
            gap="8"
          >
            {sidebarItemsList}
          </VStack>
          <Icon
            className={classes.toggleBtn}
            Svg={ArrowIcon}
            clickable
            onClick={onToggle}
            data-testid="toggle-btn"
          />
          <HStack max justify="center" gap="8" className={classes.switchers}>
            <ThemeSwitcher inverted />
            <LangSwitcher short={collapsed} inverted />
          </HStack>
        </VStack>
      }
    />
  );
});
