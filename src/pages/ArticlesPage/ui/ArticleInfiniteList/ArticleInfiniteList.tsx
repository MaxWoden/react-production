import { ArticlesList } from "entities/Article";
import { memo } from "react";
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slice/articlesPageSlice";

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  return (
    <ArticlesList
      wrap
      className={className}
      isLoading={isLoading}
      view={view}
      articles={articles}
      error={Boolean(error)}
    />
  );
});
