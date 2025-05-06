import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { lazy, Suspense } from "react";
import { ArticleAverageRatingProps } from "./ArticleAverageRating";

export const ArticleAverageRatingLazy = lazy(
  () => import("./ArticleAverageRating")
);

export const ArticleAverageRatingAsync = (props: ArticleAverageRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ArticleAverageRatingLazy {...props} />
    </Suspense>
  );
};
