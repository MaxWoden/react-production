import { Theme, ThemeContext } from "./ThemeContext";
import { THEME_LOCAL_STORAGE_KEY } from "@/shared/const/localstorage";
import { useContext } from "react";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  document.body.className = theme || Theme.LIGHT;

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.LIGHT: {
        newTheme = Theme.DARK;
        break;
      }
      case Theme.DARK: {
        newTheme = Theme.ORANGE;
        break;
      }
      case Theme.ORANGE: {
        newTheme = Theme.LIGHT;
        break;
      }
      default: {
        newTheme = Theme.LIGHT;
        break;
      }
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
