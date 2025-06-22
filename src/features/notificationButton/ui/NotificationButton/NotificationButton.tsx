import { NotificationList } from "@/entities/Notification";
import NotificationIconDeprecated from "@/shared/assets/icons/NotificationIcon.svg";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import { ToggleFeatures } from "@/shared/features";
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Drawer } from "@/shared/ui/deprecated/Drawer";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { Popover as PopoverDeprecated } from "@/shared/ui/deprecated/Popups";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import classes from "./NotificationButton.module.scss";
import { Popover } from "@/shared/ui/redesigned/Popups";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => setIsOpen(true), [setIsOpen]);
  const onCloseDrawer = useCallback(() => setIsOpen(false), [setIsOpen]);

  const trigger = (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
          <IconDeprecated
            height={24}
            width={24}
            Svg={NotificationIconDeprecated}
            inverted
          />
        </ButtonDeprecated>
      }
      on={<Icon clickable onClick={onOpenDrawer} Svg={NotificationIcon} />}
    />
  );

  return (
    <>
      <BrowserView>
        <ToggleFeatures
          feature="isAppRedesigned"
          off={
            <PopoverDeprecated className={className} trigger={trigger}>
              <NotificationList className={classes.list} />
            </PopoverDeprecated>
          }
          on={
            <Popover
              direction="bottom left"
              className={className}
              trigger={trigger}
            >
              <NotificationList className={classes.list} />
            </Popover>
          }
        />
      </BrowserView>

      <MobileView>
        {trigger}
        <Drawer portal isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
});
