import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { getArticleDetailsData } from "@/entities/Article";
import { Comment } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";
import { fetchCommentsByArticleId } from "../fetchComments/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkApi) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkApi;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue("no data");
  }

  const comment = {
    articleId: article.id,
    userId: userData.id,
    text,
  };

  try {
    const { data } = await extra.api.post<Comment>("/comments", comment);

    if (!data) {
      throw new Error();
    }

    dispatch(fetchCommentsByArticleId(article.id));

    return data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
