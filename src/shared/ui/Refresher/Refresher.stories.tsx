import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { Refresher, RefresherTheme } from "./Refresher";

const meta: Meta<typeof Refresher> = {
  title: "shared/Refresher",
  component: Refresher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Refresher>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const InvertedLight: Story = {
  args: {
    theme: RefresherTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const InvertedDark: Story = {
  args: {
    theme: RefresherTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };

export const InvertedOrange: Story = {
  args: {
    theme: RefresherTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
