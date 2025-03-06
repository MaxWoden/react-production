import { Comment } from "entities/Comment/model/types/comment";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text } from "shared/ui/Text/Text";
import classes from "./CommentCard.module.scss";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div
        className={classNames(classes.CommentCard, {}, [
          classes.isLoading,
          className,
        ])}
      >
        <div className={classes.header}>
          <Skeleton width={30} height={30} border={"50%"} />
          <Skeleton height={16} width={100} className={classes.username} />
        </div>
        <Skeleton className={classes.text} width={"100%"} height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(classes.CommentCard, {}, [className])}>
      <AppLink
        to={`${RoutePath.profile}${comment?.user.id}`}
        className={classes.header}
      >
        {comment?.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text title={comment?.user.username} />
      </AppLink>
      <Text className={classes.text} text={comment?.text} />
    </div>
  );
});
