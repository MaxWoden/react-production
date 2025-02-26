import { Theme, ThemeContext } from "./ThemeContext";
import { THEME_LOCAL_STORAGE_KEY } from "shared/const/localstorage";
import { useContext } from "react";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  document.body.className = theme || Theme.LIGHT;

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
  };

  return {
    theme: Theme.LIGHT,
    toggleTheme,
  };
}
