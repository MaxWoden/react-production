import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import classes from "./ArticleList.module.scss";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.LIST ? 3 : 16)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton
        view={view}
        key={index}
        className={classes.card}
      />
    ));
};

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.LIST } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        className={classes.card}
      />
    );
  };

  if (isLoading)
    return (
      <div
        className={classNames(classes.ArticleList, {}, [
          className,
          classes[view],
        ])}
      >
        {getSkeletons(view)}
      </div>
    );

  return (
    <div
      className={classNames(classes.ArticleList, {}, [
        className,
        classes[view],
      ])}
    >
      {articles.length ? (
        articles.map(renderArticle)
      ) : (
        <Text align={TextAlign.CENTER} text={t("Статьи отсутствуют")} />
      )}
    </div>
  );
});
