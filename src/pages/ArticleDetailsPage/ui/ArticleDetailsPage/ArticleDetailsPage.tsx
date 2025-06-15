import { ArticleDetails } from "@/entities/Article";
import { ArticleAverageRating, ArticleRating } from "@/features/articleRating";
import { ArticleRecommendationList } from "@/features/articleRecommendationsList";
import { ToggleFeatures } from "@/shared/features";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { Page } from "@/widgets/Page";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { articleDetailsPageReducer } from "../../model/slices/index";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation();
  const { id: articleId } = useParams<{ id: string }>();
  const [articleNotFound, setArticleNotFound] = useState(false);

  if (!articleId) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <VStack gap="32">
          <ArticleDetailsPageHeader articleId={articleId} />
          {!articleNotFound && (
            <ToggleFeatures
              on={<ArticleAverageRating articleId={articleId} />}
              off={<Text text={t("Оценка статьи скоро будет доступна")} />}
              feature={"isArticleRatingEnabled"}
            />
          )}
          <ArticleDetails
            setArticleNotFound={setArticleNotFound}
            articleId={articleId}
          />
          {!articleNotFound && (
            <ToggleFeatures
              on={<ArticleRating articleId={articleId} />}
              off={<Text text={t("Оценка статьи скоро будет доступна")} />}
              feature={"isArticleRatingEnabled"}
            />
          )}
          <ArticleRecommendationList />
          {!articleNotFound && <ArticleDetailsComments articleId={articleId} />}
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
