import { rtkApi } from "shared/api/rtkApi";

const commentsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleCommentsList: build.query({
      query: (id: string) => ({
        url: "/comments",
        params: {
          articleId: id,
          _expand: "user",
        },
      }),
    }),
  }),
});

export const useArticleCommentsList =
  commentsApi.useGetArticleCommentsListQuery;
