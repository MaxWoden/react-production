import { useTranslation } from "react-i18next";
import classes from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = TextTheme.PRIMARY } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.Text, {}, [classes[theme], className])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});
