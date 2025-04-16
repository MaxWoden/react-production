import { ArticleDetails, ArticlesList, ArticleView } from "entities/Article";
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
import { Text, TextSize } from "shared/ui/Text/Text";
import { Page } from "widgets/Page";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { fetchCommentsByArticleId } from "../../model/services/fetchComments/fetchCommentsByArticleId";
import { getArticleComments } from "../../model/slices/articleDetailsCommentSlice";
import { getArticleRecommendations } from "../../model/slices/articleDetailsRecommendationsSlice";
import { articleDetailsPageReducer } from "../../model/slices/index";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import classes from "./ArticleDetailsPage.module.scss";
import { VStack } from "shared/ui/Stack";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  useInitialEffects(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
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
      <Page className={classNames(classes.ArticleDetailsPage, {}, [className])}>
        <VStack gap="32">
          <ArticleDetailsPageHeader />

          <ArticleDetails id={id} />

          <Text size={TextSize.L} title={t("Рекомендуем")} />

          <ArticlesList
            target="_blank"
            view={ArticleView.GRID}
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            className={classes.recommendations}
          />

          <Text
            size={TextSize.L}
            title={t(`Комментарии(${comments?.length})`)}
          />

          <AddCommentForm
            onSendComment={onSendComment}
            className={classes.commentForm}
          ></AddCommentForm>

          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
