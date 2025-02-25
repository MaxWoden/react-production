import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo, ReactNode } from "react";

export enum ButtonSize {
  SIZE_M = "size_m",
  SIZE_L = "size_l",
  SIZE_XL = "size_xl",
}

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clear-inverted",
  OUTLINE = "outline",
  OUTLINE_INVERTED = "outline-inverted",
  DISABLED = "disabled",
}

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  dataTestid?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    onClick,
    theme,
    size = ButtonSize.SIZE_M,
    square = false,
    dataTestid,
    disabled = false,
  } = props;

  const additional: string[] = [classes[theme], classes[size], className];

  return (
    <button
      disabled={disabled}
      data-testid={dataTestid}
      onClick={onClick}
      className={classNames(
        classes.Button,
        { [classes.square]: square },
        additional
      )}
    >
      {children}
    </button>
  );
});
