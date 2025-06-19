import { RatingCard } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  useGetProfileRating,
  useRateProfile,
} from "../../api/profileRatingApi";

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = (props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);
  const [rateProfileMutation] = useRateProfile();

  if (!userData) {
    return null;
  }

  const { data, isLoading } = useGetProfileRating({
    userId: userData?.id,
    profileId,
  });

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateProfileMutation({
          userId: userData.id,
          profileId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [rateProfileMutation, profileId, userData.id]
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  return (
    <RatingCard
      rate={data?.[0]?.rate}
      onAccept={onAccept}
      className={className}
      title={t("Оцените профиль")}
      hasFeedback
      feedbackTitle={t("Оставьте свой отзыв о профиле")}
    />
  );
};

export default memo(ProfileRating);
