import { ArticleList } from "entities/Article";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffects } from "shared/lib/hooks/useInitialEffects/useInitialsEffects";
import { Page } from "shared/ui/Page/Page";
import { Text } from "shared/ui/Text/Text";
import {
  getArticlesPageError,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import {
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
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const inited = useSelector(getArticlesPageInited);

  useInitialEffects(() => !inited && dispatch(initArticlesPage()));

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  if (error) {
    return (
      <Page className={classNames(classes.ArticlesPage, {}, [className])}>
        <Text title={error} className={classes.title} />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader removeAfterRemount={false} reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(classes.ArticlesPage, {}, [className])}
      >
        <ArticlePageHeader view={view} />
        <Text title={t("Блог")} className={classes.title} />

        <ArticleList
          className={classes.list}
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
