import { ArticleDetails, ArticleList, ArticleView } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddNewComment";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
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
import classes from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id)
    return (
      <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(classes.ArticleDetailsPage, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t("Все статьи")}
        </Button>

        <ArticleDetails id={id} />

        <Text
          size={TextSize.L}
          className={classes.commentTitle}
          title={t("Рекомендуем")}
        />

        <ArticleList
          target="_blank"
          view={ArticleView.GRID}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={classes.recommendations}
        />

        <Text
          size={TextSize.L}
          className={classes.commentTitle}
          title={t(`Комментарии(${comments?.length})`)}
        />

        <AddCommentForm
          onSendComment={onSendComment}
          className={classes.commentForm}
        ></AddCommentForm>

        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
