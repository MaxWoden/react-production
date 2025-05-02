import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/types/sidebar";
import classes from "./SidebarItem.module.scss";
import { HStack } from "@/shared/ui/Stack";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { path, text, Icon } = item;
  const { t } = useTranslation();

  return (
    <AppLink to={path} theme={AppLinkTheme.INVERTED_PRIMARY}>
      <HStack
        className={classNames(
          classes.SidebarItem,
          {
            [classes.collapsed]: collapsed,
          },
          []
        )}
        gap="16"
      >
        <Icon className={classes.img} />
        <span className={classes.text}>{t(text)}</span>
      </HStack>
    </AppLink>
  );
};
