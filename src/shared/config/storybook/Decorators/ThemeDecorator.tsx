import { ThemeProvider } from "app/providers/ThemeProvider";
import { useEffect } from "react";

export const ThemeDecorator = (Story: any, { parameters }: any) => {
  const { theme } = parameters;

  useEffect(() => {
    document.body.className = theme;
  });

  return (
    <ThemeProvider initialTheme={theme}>
      <Story />
    </ThemeProvider>
  );
};
