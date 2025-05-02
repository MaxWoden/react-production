import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { Article } from "@/entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>("articlesDetailsPage/fetchArticleRecommendations", async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const { data } = await extra.api.get<Article[]>("/articles", {
      params: {
        _limit: 4,
        _expand: "user",
      },
    });

    if (!data) throw new Error();
    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue("error");
  }
});
