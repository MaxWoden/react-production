import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("article/fetchArticleById", async (id, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    if (!id) {
      throw new Error();
    }

    const { data } = await extra.api.get<Article>(`/articles/${id}`, {
      params: { _expand: "user" },
    });

    if (!data) {
      throw new Error();
    }
    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue("error");
  }
});
