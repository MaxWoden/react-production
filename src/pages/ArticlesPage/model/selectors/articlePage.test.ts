import { StateSchema } from "app/providers/StoreProvider";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "./articlePage";
import { ArticleView } from "entities/Article";

describe("articlePage", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: "error",
      },
    };
    expect(getArticlesPageError(state as StateSchema)).toEqual("error");
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
  });

  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should return false", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
      },
    };
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(undefined);
  });

  test("should return list", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: ArticleView.LIST,
      },
    };
    expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.LIST);
  });

  test("should return grid", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: ArticleView.GRID,
      },
    };
    expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.GRID);
  });

  test("should return list", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {},
    };
    expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.LIST);
  });
});
