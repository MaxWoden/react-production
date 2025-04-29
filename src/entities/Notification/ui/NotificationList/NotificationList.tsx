import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { VStack } from "shared/ui/Stack";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { Notification } from "../../model/types/notification";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import classes from "./NotificationList.module.scss";

interface NotificationListProps {
  className?: string;
  isLoading: boolean;
  notifications: Notification[] | undefined;
  error?: boolean;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className, isLoading, notifications, error } = props;
  const { t } = useTranslation();

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
        className={classes.text}
        text={t("Произошла ошибка при загрузке уведомлений")}
      />
    );
  } else if (!notifications?.length) {
    content = (
      <Text
        align={TextAlign.CENTER}
        className={classes.text}
        text={t("Нет уведомлений")}
      />
    );
  } else {
    content = notifications.map((item) => (
      <NotificationItem key={item.id} item={item} />
    ));
  }

  return (
    <VStack
      max
      align="center"
      className={classNames(classes.NotificationList, {}, [className])}
    >
      {content}
    </VStack>
  );
});
