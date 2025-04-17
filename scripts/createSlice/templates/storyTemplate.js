module.exports = (
  layer,
  componentName
) => `import type { Meta, StoryObj } from "@storybook/react";

import {${componentName}} from "./${componentName}";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof ${componentName}> = {
  title: "${layer}/${componentName}",
  component: ${componentName},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
`;
