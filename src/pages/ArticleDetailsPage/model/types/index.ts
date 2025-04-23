import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { articleDetailsRecommendationsSchema } from "./articleDetailsRecommendationsSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: articleDetailsRecommendationsSchema;
}
