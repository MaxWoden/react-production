import { ArticleList } from "entities/Article";
import { memo } from "react";
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slice/articlesPageSlice";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

interface ArticleInfiniteListProps {
  className?: string;
  onLoadNextPart: () => void;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className, onLoadNextPart } = props;

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  return (
    <ArticleList
      virtualized={{
        Header: ArticlesPageFilters,
        onLoadNextPart: onLoadNextPart,
      }}
      wrap
      className={className}
      isLoading={isLoading}
      view={view}
      articles={articles}
      error={Boolean(error)}
    />
  );
});
