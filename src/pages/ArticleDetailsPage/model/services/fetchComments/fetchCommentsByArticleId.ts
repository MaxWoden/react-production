import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Comment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>("profile/fetchProfileData", async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  if (!articleId) {
    return rejectWithValue("error");
  }

  try {
    const { data } = await extra.api.get<Comment[]>("/comments", {
      params: { articleId, _expand: "user" },
    });

    if (!data) throw new Error();

    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue("error");
  }
});
