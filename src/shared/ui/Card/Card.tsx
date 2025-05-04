import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import classes from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  max?: boolean;
}

export const Card = memo((props: CardProps) => {
  const { className, children, max, ...otherProps } = props;
  return (
    <div
      className={classNames(classes.Card, { [classes.max]: max }, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
