import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  theme?: ButtonTheme;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, onClick, theme } = props;
  return (
    <button
      onClick={onClick}
      className={classNames(classes.Button, {}, [className, classes[theme]])}
    >
      {children}
    </button>
  );
};
