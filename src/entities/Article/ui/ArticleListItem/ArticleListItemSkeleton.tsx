import { toggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Card as CardRedesigned } from "@/shared/ui/redesigned/Card";
import { Skeleton as SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { memo } from "react";
import { ArticleView } from "../../model/consts/consts";
import classes from "./ArticleListItem.module.scss";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const additionalClasses = [className, classes[view]];

    const Card = toggleFeatures({
      name: "isAppRedesigned",
      off: () => CardDeprecated,
      on: () => CardRedesigned,
    });

    const Skeleton = toggleFeatures({
      name: "isAppRedesigned",
      off: () => SkeletonDeprecated,
      on: () => SkeletonRedesigned,
    });

    if (view === ArticleView.LIST) {
      return (
        <Card className={classNames("", {}, additionalClasses)}>
          <VStack gap="8">
            <HStack max justify="between">
              <Skeleton height={100} width={100} border={"50%"} />
              <Skeleton height={16} width={100} />
            </HStack>

            <Skeleton height={16} width={250} />

            <VStack max gap="32">
              <Skeleton width={300} height={16} />
              <Skeleton width={"100%"} height={400} className={classes.img} />

              <HStack max justify="between">
                <Skeleton height={32} width={150} />
                <Skeleton width={130} height={16} />
              </HStack>
            </VStack>
          </VStack>
        </Card>
      );
    }

    return (
      <Card className={classNames("", {}, additionalClasses)}>
        <VStack gap="8">
          <Skeleton width={200} height={200} />
          <Skeleton width={130} height={16} />
          <Skeleton width={150} height={16} />
        </VStack>
      </Card>
    );
  }
);
