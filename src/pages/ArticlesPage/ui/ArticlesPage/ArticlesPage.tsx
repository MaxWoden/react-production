import { ArticleList } from "entities/Article";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { Text } from "shared/ui/Text/Text";
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlePage";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice";
import { ArticlePageHeader } from "../ArticlePageHeader/ArticlePageHeader";
import classes from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  useInitialEffects(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(classes.ArticlesPage, {}, [className])}>
        <ArticlePageHeader view={view} />

        <Text title={t("Блог")} className={classes.title} />

        <ArticleList
          className={classes.list}
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
