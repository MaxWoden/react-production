import { ArticleView } from "@/entities/Article";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { articlesPageActions, articlesPageReducer } from "./articlesPageSlice";

describe("profileSlice", () => {
  test("test setView grid", () => {
    const state: DeepPartial<ArticlesPageSchema> = { view: ArticleView.LIST };
    expect(state.view).toEqual(ArticleView.LIST);
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setView(ArticleView.GRID)
      )
    ).toEqual({ limit: 16, view: ArticleView.GRID });
  });

  test("test setView list", () => {
    const state: DeepPartial<ArticlesPageSchema> = {};

    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setView(ArticleView.LIST)
      )
    ).toEqual({ limit: 4, view: ArticleView.LIST });
  });

  test("test init initState", () => {
    const state: DeepPartial<ArticlesPageSchema> = {};
    localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, ArticleView.GRID);
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.initState()
      )
    ).toEqual({ _inited: true, limit: 16, view: ArticleView.GRID });
  });
});
