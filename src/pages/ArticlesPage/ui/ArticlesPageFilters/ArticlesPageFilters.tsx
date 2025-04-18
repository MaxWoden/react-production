import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { SortOrder } from "shared/types";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { HStack, VStack } from "shared/ui/Stack";
import { ArticlesPageSortSelect } from "widgets/ArticlesPageSortSelect";
import { ArticlesPageTypeTabs } from "widgets/ArticlesPageTypeTabs";
import { ArticlesPageViewSelector } from "widgets/ArticlesPageViewSelector";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import classes from "./ArticlesPageFilters.module.scss";

export const ArticlesPageFilters = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const type = useSelector(getArticlesPageType);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);

  const fetchData = () => dispatch(fetchArticlesList({}));

  const debouncedFetchData = useDebounce(() => {
    fetchData();
  }, 500);

  const onChangeView = useCallback(
    (articleView: ArticleView) => {
      dispatch(articlesPageActions.setView(articleView));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeType = useCallback(
    (articleType: ArticleType) => {
      dispatch(articlesPageActions.setType(articleType));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  return (
    <VStack gap="16">
      <HStack max justify="between">
        <ArticlesPageSortSelect
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticlesPageViewSelector onViewClick={onChangeView} view={view} />
      </HStack>

      <Card className={classes.search}>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t("Поиск")}
        />
      </Card>

      <ArticlesPageTypeTabs type={type} onChangeType={onChangeType} />
    </VStack>
  );
});
