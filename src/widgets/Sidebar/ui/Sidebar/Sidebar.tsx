import { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { SidebarItemsList } from "../../model/items";
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

  const itemsList = useMemo(() => {
    return SidebarItemsList.map((item) => (
      <SidebarItem collapsed={collapsed} key={item.path} item={item} />
    ));
  }, [collapsed]);

  return (
    <div
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
        dataTestid="toggle-btn"
      >
        <img src=""></img>
        {collapsed ? ">" : "<"}
      </Button>

      <nav className={classes.navbar}>{itemsList}</nav>

      <div className={classes.line}></div>

      <div className={classes.switchers}>
        <ThemeSwitcher className={classes.switcher} />
        <LangSwitcher className={classes.switcher} />
      </div>
    </div>
  );
});
