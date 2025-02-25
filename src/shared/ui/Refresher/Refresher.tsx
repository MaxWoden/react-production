import classes from "./Refresher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface RefresherProps {
  className?: string;
}

export const Refresher = memo(({ className }: RefresherProps) => {
  return (
    <span className={classNames(classes.Refresher, {}, [className])}></span>
  );
});
