import { StoryFn } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { useEffect } from "react";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeProvider initialTheme={theme}>
      <Story />
    </ThemeProvider>
  );
};
