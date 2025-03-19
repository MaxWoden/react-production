import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./Code";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Code> = {
  title: "shared/Code",
  component: Code,
  tags: ["autodocs"],
  args: {
    text:
      "import type { Meta, StoryObj } from '@storybook/react';\n" +
      "import { Code } from './Code';",
    language: "javascript",
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
