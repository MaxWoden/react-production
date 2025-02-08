import classes from "./Loader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return <span className={classNames(classes.Loader, [className])}></span>;
};
