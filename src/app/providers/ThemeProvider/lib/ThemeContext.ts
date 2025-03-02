import { createContext } from "react";

export enum Theme {
  LIGHT = "lightTheme",
  DARK = "darkTheme",
  ORANGE = "orangeTheme",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
