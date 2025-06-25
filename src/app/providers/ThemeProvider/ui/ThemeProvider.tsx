import { THEME_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { Theme } from "@/shared/const/theme";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../../../../shared/lib/context/ThemeContext";

interface ThemeProviderProps {
  initialTheme?: Theme;
  children?: ReactNode;
}

const fallbackTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme;

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;
  const [isThemeInited, setIsThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.LIGHT
  );

  document.body.className = theme;

  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme);
      setIsThemeInited(true);
    }
  }, [initialTheme, isThemeInited]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
