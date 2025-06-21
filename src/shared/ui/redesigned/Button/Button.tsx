import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { TestProps } from "@/shared/types/tests";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import classes from "./Button.module.scss";

export type ButtonSize = "m" | "l" | "xl";

export type ButtonTheme = "clear" | "outline";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    TestProps {
  className?: string;
  variant?: ButtonTheme;
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
    variant = "clear",
    size = "m",
    square,
    disabled,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [classes.square]: square,
    [classes.disabled]: disabled,
    [classes.fullWidth]: fullWidth,
  };

  const additionalClasses = [className, classes[variant], classes[size]];

  return (
    <button
      disabled={disabled}
      data-testid={props["data-testid"]}
      onClick={onClick}
      className={classNames(classes.Button, mods, additionalClasses)}
      {...otherProps}
    >
      {children}
    </button>
  );
});
