import { HTMLAttributeAnchorTarget, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { HStack } from "shared/ui/Stack";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { ArticleView } from "../../model/consts/consts";
import { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import classes from "./ArticlesList.module.scss";

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView | undefined;
  target?: HTMLAttributeAnchorTarget;
  wrap?: boolean;
  error?: boolean;
}

export const ArticlesList = memo((props: ArticlesListProps) => {
  const {
    className,
    articles,
    isLoading,
    target,
    view = ArticleView.LIST,
    error,
  } = props;
  const { t } = useTranslation();

  const renderSkeletons = useCallback(() => {
    return new Array(view === ArticleView.LIST ? 4 : 24)
      .fill(0)
      .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />);
  }, [view]);

  const renderArticle = useCallback(
    (article: Article) => {
      return (
        <ArticleListItem
          target={target}
          key={article.id}
          article={article}
          view={view}
        />
      );
    },
    [articles]
  );

  let content;

  if (isLoading) {
    content = renderSkeletons();
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        text={t("Произошла ошибка")}
      />
    );
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
