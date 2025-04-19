import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";
import { VStack } from "shared/ui/Stack";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  let content;

  if (isLoading) {
    content = (
      <div>
        <CommentCard isLoading={isLoading} />
        <CommentCard isLoading={isLoading} />
      </div>
    );
  } else {
    content = <Text text={t("Комментарии отсутствуют")} />;
  }

  return (
    <VStack max gap="16" className={className}>
      {comments?.length
        ? comments.map((comment) => (
            <CommentCard
              key={comment.id}
              isLoading={isLoading}
              comment={comment}
            />
          ))
        : content}
    </VStack>
  );
});
