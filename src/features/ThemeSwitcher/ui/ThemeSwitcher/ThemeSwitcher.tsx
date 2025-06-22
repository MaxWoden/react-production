import { saveJsonSettings } from "@/entities/User";
import Moon from "@/shared/assets/icons/moon.svg";
import Orange from "@/shared/assets/icons/orange.svg";
import Sun from "@/shared/assets/icons/sun.svg";
import { Theme } from "@/shared/const/theme";
import { ToggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button } from "@/shared/ui/deprecated/Button";
import { memo, useCallback } from "react";
import classes from "./ThemeSwitcher.module.scss";
import { Icon } from "@/shared/ui/redesigned/Icon";
import ThemeIcon from "@/shared/assets/icons/theme.svg";

interface ThemeSwitcherProps {
  className?: string;
  inverted?: boolean;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className, inverted } = props;
  const dispatch = useAppDispatch();
  const { theme, toggleTheme } = useTheme();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  let icon;

  switch (theme) {
    case Theme.LIGHT:
      icon = <Sun height={40} width={40} />;
      break;
    case Theme.DARK:
      icon = <Moon height={40} width={40} />;
      break;
    case Theme.ORANGE:
      icon = <Orange height={40} width={40} />;
      break;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <Button
          onClick={onToggleHandler}
          className={classNames(
            classes.ThemeSwitcher,
            { [classes.inverted]: inverted },
            [className]
          )}
        >
          {icon}
        </Button>
      }
      on={
        <Icon
          color="orange"
          Svg={ThemeIcon}
          clickable
          onClick={onToggleHandler}
        />
      }
    />
  );
});
