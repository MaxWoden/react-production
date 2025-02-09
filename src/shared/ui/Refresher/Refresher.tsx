import classes from "./Refresher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface RefresherProps {
  className?: string;
}

export const Refresher = ({ className }: RefresherProps) => {
  return <span className={classNames(classes.Refresher, [className])}></span>;
};
