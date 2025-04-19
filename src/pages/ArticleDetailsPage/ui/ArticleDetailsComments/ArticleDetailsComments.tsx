import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddNewComment";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { VStack } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useArticleCommentsList } from "../../api/articleCommentsApi";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const { isLoading, data: comments, error } = useArticleCommentsList(id);

    const onSendComment = useCallback(
      (value: string) => {
        dispatch(addCommentForArticle(value));
      },
      [dispatch]
    );

    return (
      <VStack max gap="16" className={className}>
        <Text size={TextSize.L} title={t(`Комментарии(${comments?.length})`)} />
        {error ? (
          <Text title={t("Произошла ошибка при загрузке комментариев")} />
        ) : (
          <>
            <AddCommentForm onSendComment={onSendComment}></AddCommentForm>
            <CommentList isLoading={isLoading} comments={comments} />
          </>
        )}
      </VStack>
    );
  }
);
