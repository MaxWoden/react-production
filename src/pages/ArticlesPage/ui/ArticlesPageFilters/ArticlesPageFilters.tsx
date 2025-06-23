import { ArticleSortField, ArticleType, ArticleView } from "@/entities/Article";
import { ArticlesPageSortSelect } from "@/features/ArticlesPageSortSelect";
import { ArticlesPageTypeTabs } from "@/features/ArticlesPageTypeTabs";
import { ArticlesPageViewSelector } from "@/features/ArticlesPageViewSelector";
import SearchIcon from "@/shared/assets/icons/search.svg";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { SortOrder } from "@/shared/types/sort";
import { Card } from "@/shared/ui/redesigned/Card";
import { Input } from "@/shared/ui/redesigned/Input";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";

export const ArticlesPageFilters = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const type = useSelector(getArticlesPageType);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);

  const fetchData = useCallback(
    () => dispatch(fetchArticlesList({})),
    [dispatch]
  );

  const debouncedFetchData = useDebounce(fetchData, 500);

  const fetchNextPage = useCallback(() => {
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeView = useCallback(
    (articleView: ArticleView) => {
      dispatch(articlesPageActions.setView(articleView));
      fetchNextPage();
    },
    [dispatch, fetchNextPage]
  );

  const onChangeType = useCallback(
    (articleType: ArticleType) => {
      dispatch(articlesPageActions.setType(articleType));
      fetchNextPage();
    },
    [dispatch, fetchNextPage]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      fetchNextPage();
    },
    [dispatch, fetchNextPage]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      fetchNextPage();
    },
    [dispatch, fetchNextPage]
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  return (
    <VStack max gap="24">
      <HStack max justify="between">
        <ArticlesPageSortSelect
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticlesPageViewSelector onViewClick={onChangeView} view={view} />
      </HStack>

      <Card padding="0" max>
        <Input
          size="l"
          addonLeft={<SearchIcon width={32} height={32} />}
          value={search}
          onChange={onChangeSearch}
          placeholder={t("Поиск")}
        />
      </Card>

      <ArticlesPageTypeTabs type={type} onChangeType={onChangeType} />
    </VStack>
  );
});
