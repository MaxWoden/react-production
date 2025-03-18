import { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";

export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading;

export const getArticlesPageInited = (state: StateSchema) =>
  state.articlesPage?._inited;

export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;

export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 16;

export const getArticlesPageNum = (state: StateSchema) =>
  state.articlesPage?.page || 1;

export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.LIST;

export const getArticlesPageSort = (state: StateSchema) =>
  state.articlesPage?.sort ?? ArticleSortField.VIEWS;

export const getArticlesPageOrder = (state: StateSchema) =>
  state.articlesPage?.order ?? "ASC";

export const getArticlesPageSearch = (state: StateSchema) =>
  state.articlesPage?.search ?? "";

export const getArticlesPageType = (state: StateSchema) =>
  state.articlesPage?.type ?? ArticleType.ALL;
