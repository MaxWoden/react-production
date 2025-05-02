import { NotificationList } from "entities/Notification";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import NotificationIcon from "shared/assets/icons/NotificationIcon.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { Icon } from "shared/ui/Icon/Icon";
import { Popover } from "shared/ui/Popups";
import classes from "./NotificationButton.module.scss";
import { AnimationProvider } from "shared/lib/components/AnimationProvider";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => setIsOpen(true), [setIsOpen]);
  const onCloseDrawer = useCallback(() => setIsOpen(false), [setIsOpen]);

  const trigger = <Icon inverted Svg={NotificationIcon} />;

  return (
    <>
      <BrowserView>
        <Popover className={className} trigger={trigger}>
          <NotificationList className={classes.list} />
        </Popover>
      </BrowserView>

      <MobileView>
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
          {trigger}
        </Button>
        <AnimationProvider>
          <Drawer portal isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </>
  );
});
