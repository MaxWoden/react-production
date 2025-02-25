import classes from "./Loader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface LoaderProps {
  className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => {
  return <span className={classNames(classes.Loader, {}, [className])}></span>;
});
