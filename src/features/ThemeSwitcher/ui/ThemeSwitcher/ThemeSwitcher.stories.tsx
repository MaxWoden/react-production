import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "features/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Inverted: Story = {
  args: {
    inverted: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedDark: Story = {
  args: {
    inverted: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryOrange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const InvertedOrange: Story = {
  args: {
    inverted: true,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
