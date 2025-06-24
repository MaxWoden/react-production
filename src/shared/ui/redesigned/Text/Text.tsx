import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import classes from "./Text.module.scss";
import { TestProps } from "@/shared/types/tests";

export type TextVariant = "primary" | "error" | "accent";

export type TextAlign = "left" | "center" | "right";

export type TextSize = "s" | "m" | "l";

interface TextProps extends TestProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
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

  const headerDataTestid = props["data-testid"]
    ? `${props["data-testid"]}.Header`
    : null;

  const paragraphDataTestid = props["data-testid"]
    ? `${props["data-testid"]}.Paragraph`
    : null;

  return (
    <div
      data-testid={dataTestid}
      className={classNames("", {}, additionalClasses)}
    >
      {title && (
        <HeaderTag data-testid={headerDataTestid} className={classes.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p data-testid={paragraphDataTestid} className={classes.text}>
          {text}
        </p>
      )}
    </div>
  );
});
