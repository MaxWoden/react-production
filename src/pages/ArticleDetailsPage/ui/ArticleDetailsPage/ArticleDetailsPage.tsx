import { ArticleDetails } from "entities/Article";
import { ArticleRecommendationsList } from "features/articleRecommendationsList";
import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { VStack } from "shared/ui/Stack";
import { Page } from "widgets/Page";
import { articleDetailsPageReducer } from "../../model/slices/index";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const [articleNotFound, setArticleNotFound] = useState(false);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames("", {}, [className])}>
        <VStack gap="32">
          <ArticleDetailsPageHeader />
          <ArticleDetails setArticleNotFound={setArticleNotFound} id={id} />
          <ArticleRecommendationsList />
          {!articleNotFound && <ArticleDetailsComments id={id} />}
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
