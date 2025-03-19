import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentSlice";
import { articleDetailsRecommendationsReducer } from "./articleDetailsRecommendationsSlice";

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recomendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
  });
