import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonSize {
  SIZE_M = "size_m",
  SIZE_L = "size_l",
  SIZE_XL = "size_xl",
}

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    onClick,
    theme,
    size = ButtonSize.SIZE_M,
    square = false,
  } = props;

  const additional: string[] = [classes[theme], classes[size], className];

  return (
    <button
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
};
