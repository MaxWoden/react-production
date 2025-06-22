import { getUserAuthData } from "@/entities/User";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Text, TextAlign } from "@/shared/ui/deprecated/Text";
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
      <VStack max gap="8">
        <Skeleton width="100%" height="80px" />
        <Skeleton width="100%" height="80px" />
        <Skeleton width="100%" height="80px" />
        <Skeleton width="100%" height="80px" />
      </VStack>
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
