import Star from "@/shared/assets/icons/star.svg";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { memo } from "react";
import { Rating } from "../../model/types/types";

interface AverageRatingProps {
  className?: string;
  isLoading?: boolean;
  data?: Rating[];
  digits?: number;
}

export const AverageRating = memo((props: AverageRatingProps) => {
  const { className, isLoading, data, digits = 2 } = props;

  const summaryRating =
    data?.reduce((accum, item) => (accum += item.rate), 0) || 0;
  const ratingsCount = data?.length || 0;
  const averageRating = parseFloat(
    (summaryRating / ratingsCount || 0).toFixed(digits)
  );

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
      <Text size={TextSize.L} text={`${averageRating}(${ratingsCount})`} />
    </HStack>
  );
});
