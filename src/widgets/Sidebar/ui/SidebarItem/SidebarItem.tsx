import { getUserAuthData } from "entities/User";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import classes from "./SidebarItem.module.scss";
import { SidebarItemType } from "widgets/Sidebar/model/types/sidebar";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { path, text, Icon } = item;
  const { t } = useTranslation();

  return (
    <AppLink
      className={classNames(
        classes.SidebarItem,
        {
          [classes.collapsed]: collapsed,
        },
        []
      )}
      to={path}
      theme={AppLinkTheme.INVERTED_PRIMARY}
    >
      <Icon className={classes.img} />
      <span className={classes.text}>{t(text)}</span>
    </AppLink>
  );
};
