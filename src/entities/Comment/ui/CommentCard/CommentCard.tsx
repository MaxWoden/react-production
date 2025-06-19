import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/deprecated/AppLink";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";
import { HStack, VStack } from "@/shared/ui/deprecated/Stack";
import { Text } from "@/shared/ui/deprecated/Text";
import { memo } from "react";
import { Comment } from "../../model/types/comment";
import classes from "./CommentCard.module.scss";
import { getRouteProfile } from "@/shared/const/router";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (!comment?.user) {
    return null;
  }

  if (isLoading) {
    return (
      <VStack
        data-testid="CommentCard.Loading"
        max
        className={classNames(classes.CommentCard, {}, [
          classes.isLoading,
          className,
        ])}
      >
        <HStack gap="8">
          <Skeleton width={30} height={30} border={"50%"} />
          <Skeleton height={16} width={100} className={classes.username} />
        </HStack>
        <Skeleton className={classes.text} width={"100%"} height={50} />
      </VStack>
    );
  }

  return (
    <VStack
      data-testid="CommentCard.Content"
      max
      className={classNames(classes.CommentCard, {}, [className])}
    >
      <AppLink to={getRouteProfile(comment?.user.id)}>
        <HStack gap="8">
          {comment?.user.avatar && (
            <Avatar size={30} src={comment.user.avatar} />
          )}
          <Text title={comment?.user.username} />
        </HStack>
      </AppLink>
      <Text className={classes.text} text={comment?.text} />
    </VStack>
  );
});
