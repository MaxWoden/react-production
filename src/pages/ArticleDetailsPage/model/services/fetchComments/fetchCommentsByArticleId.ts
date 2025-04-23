import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Comment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>("articleDetails/fetchCommentsByArticleId", async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    if (!articleId) {
      throw new Error();
    }

    const { data } = await extra.api.get<Comment[]>("/comments", {
      params: { articleId, _expand: "user" },
    });
    console.log(data);
    if (!data) throw new Error();

    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue("error");
  }
});
