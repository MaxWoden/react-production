import { AverageRating } from "@/entities/Rating";
import { memo } from "react";
import { useGetAllProfileRatings } from "../../api/profileRatingApi";

export interface ArticleAverageRatingProps {
  className?: string;
  profileId: string;
}

const ArticleAverageRating = (props: ArticleAverageRatingProps) => {
  const { className, profileId } = props;

  const { data, isLoading } = useGetAllProfileRatings(profileId);

  return (
    <AverageRating className={className} isLoading={isLoading} data={data} />
  );
};

export default memo(ArticleAverageRating);
