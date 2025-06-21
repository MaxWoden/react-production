import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { HStack } from "@/shared/ui/deprecated/Stack";
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from "@/shared/ui/deprecated/AppLink";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { useTranslation } from "react-i18next";
import { SidebarItemType } from "../../model/types/sidebar";
import classes from "./SidebarItem.module.scss";
import { memo } from "react";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { path, text, icon } = item;
  const { t } = useTranslation();

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <AppLinkDeprecated to={path} theme={AppLinkTheme.INVERTED_SECONDARY}>
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
            <IconDeprecated Svg={icon} className={classes.img} />
            <span className={classes.text}>{t(text)}</span>
          </HStack>
        </AppLinkDeprecated>
      }
      on={
        <AppLink
          to={path}
          className={classes.appLink}
          activeClassName={classes.active}
        >
          <HStack
            className={classNames(
              classes.SidebarItemRedesigned,
              {
                [classes.collapsed]: collapsed,
              },
              []
            )}
            gap="8"
            align="center"
            max
          >
            <Icon Svg={icon} className={classes.img} />
            <span className={classes.text}>{t(text)}</span>
          </HStack>
        </AppLink>
      }
    />
  );
});
