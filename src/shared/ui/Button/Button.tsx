import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

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
}

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  dataTestid?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    onClick,
    theme,
    size = ButtonSize.SIZE_M,
    square = false,
    dataTestid,
  } = props;

  const additional: string[] = [classes[theme], classes[size], className];

  return (
    <button
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
};
