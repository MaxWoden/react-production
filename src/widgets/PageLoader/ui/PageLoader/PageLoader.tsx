import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Loader as LoaderDeprecated } from "@/shared/ui/deprecated/Loader";
import { Loader } from "@/shared/ui/redesigned/Loader";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { memo } from "react";
import classes from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(classes.PageLoader, {}, [className])}
    >
      <ToggleFeatures
        on={<Loader />}
        off={<LoaderDeprecated />}
        feature={"isProfileRatingEnabled"}
      />
    </HStack>
  );
});
