import Star from "@/shared/assets/icons/star.svg";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated, TextSize } from "@/shared/ui/deprecated/Text";
import { memo } from "react";
import { Rating } from "../../model/types/types";
import { ToggleFeatures } from "@/shared/features";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { Text } from "@/shared/ui/redesigned/Text";

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
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<SkeletonDeprecated width={150} height={30} />}
        on={<Skeleton width={150} height={30} />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <HStack gap="8" className={className}>
          <IconDeprecated
            inverted
            width={30}
            height={30}
            style={{ fill: "goldenrod" }}
            Svg={Star}
          />
          <TextDeprecated
            size={TextSize.L}
            text={`${averageRating}(${ratingsCount})`}
          />
        </HStack>
      }
      on={
        <HStack gap="8" className={className}>
          <Icon
            width={30}
            height={30}
            Svg={Star}
            style={{ fill: "goldenrod" }}
          />
          <Text size="l" text={`${averageRating}(${ratingsCount})`} />
        </HStack>
      }
    />
  );
});
