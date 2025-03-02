import { Theme, useTheme } from "app/providers/ThemeProvider";
import classes from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import Moon from "shared/assets/icons/moon.svg";
import Sun from "shared/assets/icons/sun.svg";
import { Button } from "shared/ui/Button/Button";
import { memo } from "react";

export enum ThemeSwitcherStyle {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface ThemeSwitcherProps {
  className?: string;
  style?: ThemeSwitcherStyle;
}
ThemeSwitcherStyle;

export const ThemeSwitcher = memo(
  ({ className, style = ThemeSwitcherStyle.INVERTED }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
      <Button
        onClick={toggleTheme}
        className={classNames(classes.ThemeSwitcher, {}, [
          classes[style],
          className,
        ])}
      >
        {theme === Theme.LIGHT ? <Sun /> : <Moon />}
      </Button>
    );
  }
);
