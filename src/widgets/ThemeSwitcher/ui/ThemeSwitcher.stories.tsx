import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitcher, ThemeSwitcherStyle } from "./ThemeSwitcher";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {
  args: {
    style: ThemeSwitcherStyle.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Inverted: Story = {
  args: {
    style: ThemeSwitcherStyle.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {
    style: ThemeSwitcherStyle.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedDark: Story = {
  args: {
    style: ThemeSwitcherStyle.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
