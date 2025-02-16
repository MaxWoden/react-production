import { useTranslation } from "react-i18next";
import classes from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <nav className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink
          to={"/"}
          className={classes.link}
          theme={AppLinkTheme.INVERTED_PRIMARY}
        >
          {t("Главная")}
        </AppLink>
        <AppLink
          to={"/about"}
          className={classes.link}
          theme={AppLinkTheme.INVERTED_PRIMARY}
        >
          {t("О нас")}
        </AppLink>
      </div>
    </nav>
  );
};
