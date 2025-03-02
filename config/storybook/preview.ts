import type { Preview } from "@storybook/react";
import { RouterDecorator } from "../../src/shared/config/storybook/Decorators/RouterDecorator";
import { StoreDecorator } from "../../src/shared/config/storybook/Decorators/StoreDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/Decorators/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/Decorators/ThemeDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StoreDecorator(), RouterDecorator, StyleDecorator],
};
export default preview;
