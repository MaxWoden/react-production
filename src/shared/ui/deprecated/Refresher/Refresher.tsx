import classes from "./Refresher.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";

export enum RefresherTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface RefresherProps {
  className?: string;
  theme?: RefresherTheme;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Refresher = memo((props: RefresherProps) => {
  const { className, theme = RefresherTheme.PRIMARY } = props;
  return (
    <span
      className={classNames(classes.Refresher, {}, [classes[theme], className])}
    ></span>
  );
});
