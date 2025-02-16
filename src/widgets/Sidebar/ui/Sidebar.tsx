import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid={"sidebar"}
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <Button
        className={classes.btn}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.CLEAR}
      >
        |||
      </Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
