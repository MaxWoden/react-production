import { useContext } from "react";
import { THEME_LOCAL_STORAGE_KEY } from "../../../const/localstorage";
import { Theme } from "../../../const/theme";
import { ThemeContext } from "../../context/ThemeContext";

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
