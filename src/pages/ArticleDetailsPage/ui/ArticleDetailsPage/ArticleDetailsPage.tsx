import { ArticleDetails, getArticleDetailsError } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddNewComment";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { Text } from "shared/ui/Text/Text";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { fetchCommentsByArticleId } from "../../model/services/fetchComments/fetchCommentsByArticleId";

import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slice/articleDetailsCommentSlice";
import classes from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const comments = useSelector(getArticleComments.selectAll);
  const error = useSelector(getArticleDetailsError);

  useInitialEffects(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticle(value));
    },
    [dispatch]
  );

  if (!id)
    return (
      <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <AddCommentForm
          onSendComment={onSendComment}
          className={classes.commentForm}
        ></AddCommentForm>
        <Text
          className={classes.commentTitle}
          title={t(`Комментарии(${comments?.length})`)}
        />
        {!error && <CommentList isLoading={isLoading} comments={comments} />}
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
