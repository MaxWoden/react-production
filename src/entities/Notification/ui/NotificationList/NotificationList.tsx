import { getUserAuthData } from "@/entities/User";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Skeleton as SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated, TextAlign } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { useNotificationsByUserId } from "../../api/notificationApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { toggleFeatures, ToggleFeatures } from "@/shared/features";

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

  const Skeleton = toggleFeatures({
    name: "isAppRedesigned",
    off: () => SkeletonDeprecated,
    on: () => SkeletonRedesigned,
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
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <TextDeprecated
            align={TextAlign.CENTER}
            text={t("Произошла ошибка при загрузке уведомлений")}
          />
        }
        on={
          <Text
            align="center"
            text={t("Произошла ошибка при загрузке уведомлений")}
          />
        }
      />
    );
  } else if (!notifications?.length) {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <TextDeprecated
            align={TextAlign.CENTER}
            text={t("Нет уведомлений")}
          />
        }
        on={<Text align="center" text={t("Нет уведомлений")} />}
      />
    );
  } else {
    content = notifications.map((item) => (
      <NotificationItem key={item.id} item={item} />
    ));
  }

  return (
    <VStack gap="16" max align="center" className={className}>
      {content}
    </VStack>
  );
});
