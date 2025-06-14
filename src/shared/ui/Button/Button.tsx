import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { TestProps } from "@/shared/types/tests";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import classes from "./Button.module.scss";

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
  OUTLINE_GREEN = "outline-green",
  OUTLINE_RED = "outline-red",
  DISABLED = "disabled",
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    TestProps {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  children?: ReactNode;
  fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    onClick,
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.SIZE_M,
    square,
    disabled,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [classes[theme]]: true,
    [classes[size]]: true,
    [classes.square]: square,
    [classes.disabled]: disabled,
    [classes.fullWidth]: fullWidth,
  };

  return (
    <button
      disabled={disabled}
      data-testid={props["data-testid"]}
      onClick={onClick}
      className={classNames(classes.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
