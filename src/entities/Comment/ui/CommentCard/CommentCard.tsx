import { memo } from "react";
import { RoutePath } from "@/shared/config/routerConfig/routerConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Text } from "@/shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";
import classes from "./CommentCard.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack
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
    <VStack max className={classNames(classes.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment?.user.id}`}>
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
