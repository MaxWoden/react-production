import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "@/shared/ui/deprecated/Stack";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { useTranslation } from "react-i18next";
import { SidebarItemType } from "../../model/types/sidebar";
import classes from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { path, text, Icon } = item;
  const { t } = useTranslation();

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <AppLink to={path} variant="inverted">
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
      }
      on={
        <AppLink to={path}>
          <HStack
            className={classNames(
              classes.SidebarItemRedesigned,
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
      }
    />
  );
};
