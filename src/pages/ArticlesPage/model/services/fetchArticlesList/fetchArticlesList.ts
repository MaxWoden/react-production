import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Article } from "entities/Article";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../../selectors/articlesPageSelectors";

interface FetchArticleProps {
  add?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleProps,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const limit = getArticlesPageLimit(getState());
  const type = getArticlesPageType(getState());
  const sort = getArticlesPageSort(getState());
  const order = getArticlesPageOrder(getState());
  const search = getArticlesPageSearch(getState());
  const page = getArticlesPageSearch(getState());

  try {
    addQueryParams({ sort, order, search, type });
    const { data } = await extra.api.get<Article[]>("/articles", {
      params: {
        q: search,
        type_like: type,
        _sort: sort,
        _order: order,
        _page: page,
        _limit: limit,
        _expand: "user",
      },
    });
    if (!data) throw new Error();
    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue("Произошла ошибка при загрузке данных");
  }
});
