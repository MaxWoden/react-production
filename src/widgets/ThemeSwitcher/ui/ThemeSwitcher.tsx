import { Theme, useTheme } from "app/providers/ThemeProvider";
import classes from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import sun from "shared/assets/icons/sun.png";
import moon from "shared/assets/icons/moon.png";
import { Button } from "shared/ui/Button/Button";

export enum ThemeSwitcherStyle {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface ThemeSwitcherProps {
  className?: string;
  style?: ThemeSwitcherStyle;
}
ThemeSwitcherStyle;

export const ThemeSwitcher = ({
  className,
  style = ThemeSwitcherStyle.PRIMARY,
}: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(classes.ThemeSwitcher, {}, [
        classes[style],
        className,
      ])}
    >
      <img
        height={40}
        width={40}
        src={theme === Theme.DARK ? moon : sun}
        alt="Theme"
      />
    </Button>
  );
};
