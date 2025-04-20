import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: "h3",
  [TextSize.M]: "h2",
  [TextSize.L]: "h1",
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    "data-testid": dataTestid = "Text",
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const additional = [classes[theme], classes[align], classes[size], className];

  return (
    <div
      data-testid={dataTestid}
      className={classNames(classes.Text, {}, additional)}
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
