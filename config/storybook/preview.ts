import type { Preview } from "@storybook/react";
import { RouterDecorator } from "../../src/shared/config/storybook/Decorators/RouterDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/Decorators/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/Decorators/ThemeDecorator";
import { StoreDecorator } from "../../src/shared/config/storybook/Decorators/StoreDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouterDecorator, StyleDecorator, ThemeDecorator, StoreDecorator],
};
export default preview;
