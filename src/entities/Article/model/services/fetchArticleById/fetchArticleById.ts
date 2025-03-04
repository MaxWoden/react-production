import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("article/fetchArticleById", async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const { data } = await extra.api.get<Article>(`/articles/${articleId}`);

    if (!data) throw new Error();

    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue("error");
  }
});
