import { Rating } from "@/entities/Rating";
import { rtkApi } from "@/shared/api/rtkApi";

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArg>({
      query: ({ userId, articleId }) => ({
        url: "/article-ratings",
        params: {
          userId,
          articleId,
        },
      }),
    }),
    getAllArticleRatings: build.query<Rating[], string>({
      query: (articleId) => ({
        url: "/article-ratings",
        params: {
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (arg) => ({
        url: "/article-ratings",
        method: "POST",
        body: arg,
      }),
    }),
  }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useGetAllArticleRatings =
  articleRatingApi.useGetAllArticleRatingsQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
