import { ArticleDetails } from "@/entities/Article";
import { ArticleRating, AverageArticleRating } from "@/features/articleRating";
import { ArticleRecommendationList } from "@/features/articleRecommendationsList";
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

  if (!articleId) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <VStack gap="32">
          <ArticleDetailsPageHeader />
          {!articleNotFound && <AverageArticleRating articleId={articleId} />}
          <ArticleDetails
            setArticleNotFound={setArticleNotFound}
            articleId={articleId}
          />
          {!articleNotFound && <ArticleRating articleId={articleId} />}
          <ArticleRecommendationList />
          {!articleNotFound && <ArticleDetailsComments articleId={articleId} />}
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
