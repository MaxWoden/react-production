import type { Meta, StoryObj } from "@storybook/react";

import { Loader, LoaderTheme } from "./Loader";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const InvertedLight: Story = {
  args: {
    theme: LoaderTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const InvertedDark: Story = {
  args: {
    theme: LoaderTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };

export const InvertedOrange: Story = {
  args: {
    theme: LoaderTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
