import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import classes from "./Text.module.scss";

export type TextVariant = "primary" | "error" | "accent";

export type TextAlign = "left" | "center" | "right";

export type TextSize = "s" | "m" | "l";

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: "h3",
  m: "h2",
  l: "h1",
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = "primary",
    align = "left",
    size = "m",
    "data-testid": dataTestid,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const additionalClasses = [
    classes[variant],
    classes[align],
    classes[size],
    className,
  ];

  return (
    <div
      data-testid={dataTestid}
      className={classNames("", {}, additionalClasses)}
    >
      {title && (
        <HeaderTag
          data-testid={`${dataTestid}.Header`}
          className={classes.title}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p data-testid={`${dataTestid}.Paragraph`} className={classes.text}>
          {text}
        </p>
      )}
    </div>
  );
});
