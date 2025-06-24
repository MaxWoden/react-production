import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink as AppLinkDeprecated } from "@/shared/ui/deprecated/AppLink";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { memo } from "react";
import { Comment } from "../../model/types/comment";
import classes from "./CommentCard.module.scss";
import { getRouteProfile } from "@/shared/const/router";
import { ToggleFeatures } from "@/shared/features";
import { Card } from "@/shared/ui/redesigned/Card";

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
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <VStack
            data-testid="CommentCard.Loading"
            max
            className={classNames(classes.CommentCard, {}, [
              classes.isLoading,
              className,
            ])}
          >
            <HStack gap="8">
              <SkeletonDeprecated width={30} height={30} border={"50%"} />
              <SkeletonDeprecated
                height={16}
                width={100}
                className={classes.username}
              />
            </HStack>
            <SkeletonDeprecated
              className={classes.text}
              width={"100%"}
              height={50}
            />
          </VStack>
        }
        on={
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
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <VStack
          data-testid="CommentCard.Content"
          max
          className={classNames(classes.CommentCard, {}, [className])}
        >
          <AppLinkDeprecated to={getRouteProfile(comment?.user.id)}>
            <HStack gap="8">
              {comment?.user.avatar && (
                <AvatarDeprecated size={30} src={comment.user.avatar} />
              )}
              <TextDeprecated title={comment?.user.username} />
            </HStack>
          </AppLinkDeprecated>
          <TextDeprecated className={classes.text} text={comment?.text} />
        </VStack>
      }
      on={
        <Card className={className} padding="24" max border="round">
          <VStack gap="8" data-testid="CommentCard.Content" max>
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
        </Card>
      }
    />
  );
});
