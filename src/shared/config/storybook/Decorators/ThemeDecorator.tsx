// eslint-disable-next-line wodenPlugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/theme";
import { StoryFn } from "@storybook/react";
import { useEffect } from "react";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  useEffect(() => {
    document.body.className = theme;
  }, []);

  return (
    <ThemeProvider initialTheme={theme}>
      <Story />
    </ThemeProvider>
  );
};
