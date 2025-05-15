import { AverageRating } from "@/entities/Rating";
import { memo } from "react";
import { useGetAllProfileRatings } from "../../api/profileRatingApi";

export interface ProfileAverageRatingProps {
  className?: string;
  articleId: string;
}

const ProfileAverageRating = (props: ProfileAverageRatingProps) => {
  const { className, articleId } = props;

  const { data, isLoading } = useGetAllProfileRatings(articleId);

  return (
    <AverageRating className={className} isLoading={isLoading} data={data} />
  );
};

export default memo(ProfileAverageRating);
