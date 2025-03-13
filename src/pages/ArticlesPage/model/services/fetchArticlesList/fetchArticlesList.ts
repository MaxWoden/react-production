import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Article } from "entities/Article";

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const { data } = await extra.api.get<Article[]>("/articles", {
      params: { _expand: "user" },
    });
    if (!data) throw new Error();

    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue("error");
  }
});
