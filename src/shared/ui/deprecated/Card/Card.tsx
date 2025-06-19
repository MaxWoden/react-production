import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import classes from "./Card.module.scss";
import { TestProps } from "@/shared/types/tests";

interface CardProps extends HTMLAttributes<HTMLDivElement>, TestProps {
  className?: string;
  children?: ReactNode;
  max?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Card = memo((props: CardProps) => {
  const { className, children, max, ...otherProps } = props;
  return (
    <div
      data-testid={props["data-testid"]}
      className={classNames(classes.Card, { [classes.max]: max }, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
