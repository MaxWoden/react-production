import { Skeleton } from "@/shared/ui/Skeleton";
import { lazy, Suspense } from "react";
import { ProfileRatingProps } from "./ProfileRating";

const ProfileRatingLazy = lazy(() => import("./ProfileRating"));

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
      <ProfileRatingLazy {...props} />
    </Suspense>
  );
};
