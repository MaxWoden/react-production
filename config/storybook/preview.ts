import type { Preview } from "@storybook/react";
import { RouterDecorator } from "../../src/shared/config/storybook/Decorators/RouterDecorator";
import { StoreDecorator } from "../../src/shared/config/storybook/Decorators/StoreDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/Decorators/StyleDecorator";
import { SuspenseDecorator } from "./../../src/shared/config/storybook/Decorators/SuspenseDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    StoreDecorator(),
    RouterDecorator,
    StyleDecorator,
    SuspenseDecorator,
  ],
};
export default preview;
