import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { SortOrder } from "shared/types";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import { ArticlesPageSortSelect } from "widgets/ArticlesPageSortSelect/ArticlesPageSortSelect";
import { ArticlesPageTypeTabs } from "widgets/ArticlesPageTypeTabs/ArticlesPageTypeTabs";
import { ArticlesPageViewSelector } from "widgets/ArticlesPageViewSelector/ArticlesPageViewSelector";
import classes from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const type = useSelector(getArticlesPageType);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);

  const debouncedFetchData = useDebounce(() => {
    dispatch(fetchArticlesList({}));
  }, 500);

  const onChangeView = useCallback(
    (articleView: ArticleView) => {
      dispatch(articlesPageActions.setView(articleView));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeType = useCallback(
    (articleType: ArticleType) => {
      dispatch(articlesPageActions.setType(articleType));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
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
    <div className={classNames(classes.ArticlesPageFilters, {}, [className])}>
      <div className={classes.sortWrapper}>
        <ArticlesPageSortSelect
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticlesPageViewSelector onViewClick={onChangeView} view={view} />
      </div>
      <Card className={classes.search}>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t("Поиск")}
        />
      </Card>
      <ArticlesPageTypeTabs type={type} onChangeType={onChangeType} />
    </div>
  );
});
