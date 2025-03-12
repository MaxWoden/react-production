import classes from "./Button.module.scss";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";

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

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  dataTestid?: string;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    onClick,
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.SIZE_M,
    square,
    dataTestid,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [classes[theme]]: true,
    [classes[size]]: true,
    [classes.square]: square,
    [classes.disabled]: disabled,
  };

  return (
    <button
      disabled={disabled}
      data-testid={dataTestid}
      onClick={onClick}
      className={classNames(classes.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
