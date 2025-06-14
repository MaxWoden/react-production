import { DetailedHTMLProps, HTMLAttributes, memo, ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import classes from "./Flex.module.scss";
import { TestProps } from "@/shared/types/tests";

export type FlexJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "none";
export type FlexAlign = "start" | "center" | "end" | "none";
export type FlexDirection = "row" | "column";
export type FlexGap = "4" | "8" | "16" | "24" | "32";
export type FlexWrap = "wrap" | "nowrap";

const justifyClasses: Record<FlexJustify, string> = {
  start: classes.justifyStart,
  center: classes.justifyCenter,
  end: classes.justifyEnd,
  between: classes.justifyBetween,
  around: classes.justifyAround,
  none: classes.justifyNone,
};

const alignClasses: Record<FlexAlign, string> = {
  start: classes.alignStart,
  center: classes.alignCenter,
  end: classes.alignEnd,
  none: classes.alignNone,
};

const directionClasses: Record<FlexDirection, string> = {
  row: classes.directionRow,
  column: classes.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: classes.gap4,
  8: classes.gap8,
  16: classes.gap16,
  24: classes.gap24,
  32: classes.gap32,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps, TestProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  wrap?: boolean;
}

export const Flex = memo((props: FlexProps) => {
  const {
    className,
    children,
    justify = "start",
    align = "center",
    direction = "row",
    gap,
    max,
    wrap,
    ...otherProps
  } = props;

  const additionalClasses = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [classes.max]: max,
    [classes.wrap]: wrap,
  };

  return (
    <div
      data-testid={props["data-testid"]}
      className={classNames(classes.Flex, mods, additionalClasses)}
      {...otherProps}
    >
      {children}
    </div>
  );
});
