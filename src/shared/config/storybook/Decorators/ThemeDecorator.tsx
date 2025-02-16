import { ThemeProvider, useTheme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";

export const ThemeDecorator = (Story: any, { parameters }: any) => {
  const { theme } = parameters;

  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
