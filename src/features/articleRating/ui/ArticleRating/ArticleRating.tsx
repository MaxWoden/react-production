import { RatingCard } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  useGetArticleRating,
  useRateArticle,
} from "../../api/articleRatingApi";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);
  const [rateArticleMutation] = useRateArticle();

  if (!userData) {
    return null;
  }

  const { data, isLoading } = useGetArticleRating({
    userId: userData?.id,
    articleId,
  });

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id,
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [rateArticleMutation, articleId]
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  return (
    <RatingCard
      rate={data?.[0]?.rate}
      onAccept={onAccept}
      className={className}
      title={t("Оцените статью")}
      hasFeedback
      feedbackTitle={t(
        "Оставьте свой отзыв о статье, это поможет улучшить качество статей"
      )}
    />
  );
};

export default memo(ArticleRating);
