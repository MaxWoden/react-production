import { ArticleDetails } from "@/entities/Article";
import { ArticleAverageRating, ArticleRating } from "@/features/articleRating";
import { ArticleRecommendationList } from "@/features/articleRecommendationsList";
import { getFeatureFlags } from "@/shared/features";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { VStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page";
import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import { articleDetailsPageReducer } from "../../model/slices/index";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id: articleId } = useParams<{ id: string }>();
  const [articleNotFound, setArticleNotFound] = useState(false);
  const isArticleRatingEnabled = getFeatureFlags("isArticleRatingEnabled");
  const showArticleRating = !articleNotFound && isArticleRatingEnabled;

  if (!articleId) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <VStack gap="32">
          <ArticleDetailsPageHeader articleId={articleId} />
          {showArticleRating && <ArticleAverageRating articleId={articleId} />}
          <ArticleDetails
            setArticleNotFound={setArticleNotFound}
            articleId={articleId}
          />
          {showArticleRating && <ArticleRating articleId={articleId} />}
          <ArticleRecommendationList />
          {!articleNotFound && <ArticleDetailsComments articleId={articleId} />}
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
