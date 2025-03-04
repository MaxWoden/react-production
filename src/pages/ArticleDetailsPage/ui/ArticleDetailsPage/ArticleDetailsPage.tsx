import { ArticleDetails, getArticleDetailsError } from "entities/Article";
import { CommentList } from "entities/Comment";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "pages/ArticleDetailsPage/model/selectors/comments";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Text } from "shared/ui/Text/Text";
import classes from "./ArticleDetailsPage.module.scss";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchComments/fetchCommentsByArticleId";

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
        {!error && <CommentList isLoading={isLoading} comments={comments} />}
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
