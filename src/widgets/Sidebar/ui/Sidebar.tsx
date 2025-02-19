import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import Home from "shared/assets/icons/home.svg";
import About from "shared/assets/icons/about.svg";
import { ThemeSwitcherStyle } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

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
      >
        <img src=""></img>
        {collapsed ? ">" : "<"}
      </Button>
      <nav className={classes.navbar}>
        <AppLink
          className={classes.link}
          to={RoutePath.main}
          theme={AppLinkTheme.INVERTED_PRIMARY}
        >
          <Home className={classes.img} />

          <div className={classes.item}>{t("Главная")}</div>
        </AppLink>
        <AppLink
          className={classes.link}
          to={RoutePath.about}
          theme={AppLinkTheme.INVERTED_PRIMARY}
        >
          <About className={classes.img} />
          <div className={classes.item}> {t("О нас")}</div>
        </AppLink>
      </nav>
      <div className={classes.line}></div>
      <div className={classes.switchers}>
        <ThemeSwitcher className={classes.switcher} />
        <LangSwitcher className={classes.switcher} />
      </div>
    </div>
  );
};
