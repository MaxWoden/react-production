import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { SortOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const inited = getArticlesPageInited(getState());

  if (!inited) {
    const orderFromUrl = searchParams.get("order") as SortOrder;
    const sortFromUrl = searchParams.get("sort") as ArticleSortField;
    const typeFromUrl = searchParams.get("type") as ArticleType;
    const searchFromUrl = searchParams.get("search");

    orderFromUrl && dispatch(articlesPageActions.setOrder(orderFromUrl));
    sortFromUrl && dispatch(articlesPageActions.setSort(sortFromUrl));
    typeFromUrl && dispatch(articlesPageActions.setType(typeFromUrl));
    searchFromUrl && dispatch(articlesPageActions.setSearch(searchFromUrl));

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
