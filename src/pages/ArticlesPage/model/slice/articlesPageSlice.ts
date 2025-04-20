import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import {
  Article,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from "entities/Article";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { SortOrder } from "shared/types";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { ArticlesPageSchema } from "../types/articlesPageSchema";

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: "articlesPage",
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 4,
    sort: ArticleSortField.CREATED,
    search: "",
    order: "ASC",
    type: ArticleType.ALL,
    view: ArticleView.LIST,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
      state.limit = action.payload === ArticleView.LIST ? 4 : 16;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    initState: (state) => {
      console.log(state.view);
      const view = localStorage.getItem(
        ARTICLES_VIEW_LOCALSTORAGE_KEY
      ) as ArticleView;

      state.view = view;
      state.limit = view === ArticleView.LIST ? 4 : 16;
      state._inited = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        if (!action.meta.arg.add) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;
        if (action.meta.arg.add) {
          articlesAdapter.addMany(state, action.payload);
        } else {
          articlesAdapter.setAll(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
  articlesPageSlice;
