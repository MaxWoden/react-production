import { ThemeDecorator } from "../../src/shared/config/storybook/Decorators/ThemeDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/Decorators/StyleDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/Decorators/RouterDecorator";
import { StoreDecorator } from "../../src/shared/config/storybook/Decorators/StoreDecorator";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator, RouterDecorator, StoreDecorator],
};
export default preview;
