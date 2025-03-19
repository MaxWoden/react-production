import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import classes from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView | undefined;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.LIST ? 4 : 24)
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
  const {
    className,
    articles,
    isLoading,
    target,
    view = ArticleView.LIST,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        target={target}
        key={article.id}
        article={article}
        view={view}
        className={classes.card}
      />
    );
  };

  let content;

  if (isLoading) {
    content = getSkeletons(view);
  } else if (!isLoading && !articles.length) {
    content = <Text align={TextAlign.CENTER} text={t("Статьи отсутствуют")} />;
  } else {
    content = articles.map(renderArticle);
  }

  return (
    <div
      className={classNames(classes.ArticleList, {}, [
        className,
        classes[view],
      ])}
    >
      {content}
    </div>
  );
});
