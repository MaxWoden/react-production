import { ArticleList, ArticleView } from "@/entities/Article";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated, TextSize } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";
import classes from "./ArticleRecommendationList.module.scss";
import { ToggleFeatures } from "@/shared/features";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(4);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <VStack
        data-testid="ArticleRecommendationsList"
        max
        gap="8"
        className={className}
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          off={<TextDeprecated size={TextSize.L} title={t("Рекомендуем")} />}
          on={<Text size="l" title={t("Рекомендуем")} />}
        />

        <ArticleList
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
