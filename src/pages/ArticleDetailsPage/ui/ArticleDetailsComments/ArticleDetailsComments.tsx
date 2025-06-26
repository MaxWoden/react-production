import { CommentList } from "@/entities/Comment";
import { AddCommentForm } from "@/features/AddNewComment";
import { ToggleFeatures } from "@/shared/features";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text as TextDeprecated, TextSize } from "@/shared/ui/deprecated/Text";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextRedesigned } from "@/shared/ui/redesigned/Text";
import { memo, useCallback, useEffect } from "react";
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
  articleId: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    useEffect(() => {
      dispatch(fetchCommentsByArticleId(articleId));
    }, [dispatch, articleId]);

    const onSendComment = useCallback(
      (value: string) => {
        dispatch(addCommentForArticle(value));
      },
      [dispatch]
    );

    return (
      <VStack max gap="16" className={className}>
        <ToggleFeatures
          on={
            <TextDeprecated
              size={TextSize.L}
              title={t(`Комментарии(${comments.length})`)}
            />
          }
          off={
            <TextRedesigned
              size="l"
              title={t(`Комментарии(${comments.length})`)}
            />
          }
          feature={"isProfileRatingEnabled"}
        />
        {error ? (
          <ToggleFeatures
            on={
              <TextDeprecated
                title={t("Произошла ошибка при загрузке комментариев")}
              />
            }
            off={
              <TextRedesigned
                title={t("Произошла ошибка при загрузке комментариев")}
              />
            }
            feature={"isProfileRatingEnabled"}
          />
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
