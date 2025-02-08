import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={classNames(classes.Button, [className])}
    >
      {children}
    </button>
  );
};
