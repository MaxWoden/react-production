import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import classes from "./ArticlesList.module.scss";
import { HStack } from "shared/ui/Stack";

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView | undefined;
  target?: HTMLAttributeAnchorTarget;
  wrap?: boolean;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.LIST ? 4 : 24)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);
};

export const ArticlesList = memo((props: ArticlesListProps) => {
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

  const additionalClasses = [className, classes[view]];

  return (
    <HStack
      align="none"
      justify="center"
      wrap
      gap="32"
      max
      className={classNames("", {}, additionalClasses)}
    >
      {content}
    </HStack>
  );
});
