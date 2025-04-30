import { getUserAuthData } from "entities/User";

import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { VStack } from "shared/ui/Stack";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { useNotificationsByUserId } from "../../api/notificationApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  if (!authData) {
    return null;
  }

  const {
    isLoading,
    data: notifications,
    error,
  } = useNotificationsByUserId(authData.id, {
    pollingInterval: 5000,
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton width="100%" height="80px" />
        <Skeleton width="100%" height="80px" />
        <Skeleton width="100%" height="80px" />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        text={t("Произошла ошибка при загрузке уведомлений")}
      />
    );
  } else if (!notifications?.length) {
    content = <Text align={TextAlign.CENTER} text={t("Нет уведомлений")} />;
  } else {
    content = notifications.map((item) => (
      <NotificationItem key={item.id} item={item} />
    ));
  }

  return (
    <VStack max align="center" className={className}>
      {content}
    </VStack>
  );
});
