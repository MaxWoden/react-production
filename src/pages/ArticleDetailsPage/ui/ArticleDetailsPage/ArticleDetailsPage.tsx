import { ArticleDetails } from "@/entities/Article";
import { ArticleRating } from "@/features/articleRating";
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
  const { id } = useParams<{ id: string }>();
  const [articleNotFound, setArticleNotFound] = useState(false);

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <VStack gap="32">
          <ArticleDetailsPageHeader />
          <ArticleDetails setArticleNotFound={setArticleNotFound} id={id} />
          {!articleNotFound && <ArticleRating articleId={id} />}
          <ArticleRecommendationList />
          {!articleNotFound && <ArticleDetailsComments id={id} />}
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
