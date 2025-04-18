import { Theme, useTheme } from "app/providers/ThemeProvider";
import { memo } from "react";
import Moon from "shared/assets/icons/moon.svg";
import Orange from "shared/assets/icons/orange.svg";
import Sun from "shared/assets/icons/sun.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import classes from "./ThemeSwitcher.module.scss";

export enum ThemeSwitcherStyle {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface ThemeSwitcherProps {
  className?: string;
  style?: ThemeSwitcherStyle;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className, style = ThemeSwitcherStyle.INVERTED } = props;
  const { theme, toggleTheme } = useTheme();

  let icon;

  switch (theme) {
    case Theme.LIGHT:
      icon = <Sun />;
      break;
    case Theme.DARK:
      icon = <Moon />;
      break;
    case Theme.ORANGE:
      icon = <Orange />;
      break;
  }

  const additionalClasses = [classes[style], className];

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(classes.ThemeSwitcher, {}, additionalClasses)}
    >
      <HStack align="center">{icon}</HStack>
    </Button>
  );
});
