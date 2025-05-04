import { CommentList } from "@/entities/Comment";
import { AddCommentForm } from "@/features/AddNewComment";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffects } from "@/shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { VStack } from "@/shared/ui/Stack";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "../../model/selectors/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchComments/fetchCommentsByArticleId";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";

interface ArticleDetailsCommentsProps {
  className?: string;
  articleId?: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    useInitialEffects(() => {
      dispatch(fetchCommentsByArticleId(articleId));
    });

    const onSendComment = useCallback(
      (value: string) => {
        dispatch(addCommentForArticle(value));
      },
      [dispatch]
    );

    return (
      <VStack max gap="16" className={className}>
        <Text size={TextSize.L} title={t(`Комментарии(${comments.length})`)} />
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
