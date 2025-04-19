import { StateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recomendations?.isLoading && true;
export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articleDetailsPage?.recomendations?.error;
