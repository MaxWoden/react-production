import { ArticlesList, ArticleView } from "entities/Article";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { VStack } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text/Text";
import classes from "./ArticleRecommendationsList.module.scss";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(4);

    return (
      <VStack max gap="8" className={classNames("", {}, [className])}>
        <Text size={TextSize.L} title={t("Рекомендуем")} />
        <ArticlesList
          target="_blank"
          view={ArticleView.GRID}
          articles={articles}
          isLoading={isLoading}
          error={Boolean(error)}
          className={classes.recommendations}
        />
      </VStack>
    );
  }
);
