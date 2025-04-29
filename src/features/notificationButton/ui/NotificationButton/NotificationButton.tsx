import { NotificationList } from "entities/Notification";
import { memo } from "react";
import NotificationIcon from "shared/assets/icons/NotificationIcon.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { Popover } from "shared/ui/Popups";
import { useNotificationsByUserId } from "../../api/notificationApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const authData = useSelector(getUserAuthData);

  if (!authData) {
    return null;
  }

  const { isLoading, data, error } = useNotificationsByUserId(authData.id, {
    pollingInterval: 5000,
  });

  return (
    <Popover
      className={className}
      trigger={<Icon inverted Svg={NotificationIcon} />}
    >
      <NotificationList
        isLoading={isLoading}
        notifications={data}
        error={Boolean(error)}
      />
    </Popover>
  );
});
