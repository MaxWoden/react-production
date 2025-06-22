import { Loader } from "@/shared/ui/deprecated/Loader";
import classes from "./PageLoader.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { HStack } from "@/shared/ui/redesigned/Stack";

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
      <Loader />
    </HStack>
  );
});
