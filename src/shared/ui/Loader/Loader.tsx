import classes from "./Loader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

export enum LoaderTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface LoaderProps {
  className?: string;
  theme?: LoaderTheme;
}

export const Loader = memo((props: LoaderProps) => {
  const { className, theme = LoaderTheme.PRIMARY } = props;
  return (
    <span
      className={classNames(classes.Loader, {}, [classes[theme], className])}
    ></span>
  );
});
