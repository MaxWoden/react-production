//eslint-disable-next-line wodenPlugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/theme";
import { ReactElement, useEffect } from "react";

export const ThemeDecorator = (theme: Theme) => (Story: any) => {
  useEffect(() => {
    document.body.className = theme;
  }, []);

  return (
    <ThemeProvider initialTheme={theme}>
      {(<Story />) as ReactElement}
    </ThemeProvider>
  );
};
