import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";
import { Notification } from "../../model/types/notification";
import classes from "./NotificationItem.module.scss";

interface NotificationProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationProps) => {
  const { className, item } = props;
  const { id, title, description, href } = item;

  const content = (
    <Text
      className={classNames(classes.NotificationItem, {}, [className])}
      key={id}
      title={title}
      text={description}
    />
  );

  if (href) {
    return (
      <a
        className={classes.link}
        target="_blank"
        rel="noreferrer"
        href={item.href}
      >
        {content}
      </a>
    );
  }

  return content;
});
