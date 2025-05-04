import Star from "@/shared/assets/icons/star.svg";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { HStack } from "@/shared/ui/Stack";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useGetAllArticleRatings } from "../../api/articleRatingApi";

interface AverageArticleRatingProps {
  className?: string;
  articleId: string;
}

const AverageArticleRating = (props: AverageArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  const { data, isLoading } = useGetAllArticleRatings(articleId);

  const summaryRating =
    data?.reduce((accum, item) => (accum += item.rate), 0) || 0;
  const ratingsCount = data?.length || 0;
  const averageRating = summaryRating / ratingsCount || 0;

  if (isLoading) {
    return <Skeleton width={150} height={30} />;
  }

  return (
    <HStack gap="8" className={className}>
      <Icon
        inverted
        width={30}
        height={30}
        style={{ fill: "goldenrod" }}
        Svg={Star}
      />
      <Text size={TextSize.L} text={t(`${averageRating}(${ratingsCount})`)} />
    </HStack>
  );
};

export default memo(AverageArticleRating);
