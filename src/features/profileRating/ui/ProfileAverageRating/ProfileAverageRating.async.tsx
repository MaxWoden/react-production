import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { lazy, Suspense } from "react";
import { ProfileAverageRatingProps } from "./ProfileAverageRating";

export const ProfileAverageRatingLazy = lazy(
  () => import("./ProfileAverageRating")
);

export const ProfileAverageRatingAsync = (props: ProfileAverageRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
      <ProfileAverageRatingLazy {...props} />
    </Suspense>
  );
};
