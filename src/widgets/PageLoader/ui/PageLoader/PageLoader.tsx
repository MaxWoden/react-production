import { Loader } from "shared/ui/Loader/Loader";
import classes from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(classes.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
});
