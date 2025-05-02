import type { Meta, StoryObj } from "@storybook/react";

import { LangSwitcher, LangSwitcherStyle } from "./LangSwitcher";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof LangSwitcher> = {
  title: "widgets/LangSwitcher",
  component: LangSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Primary: Story = {
  args: {
    style: LangSwitcherStyle.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Inverted: Story = {
  args: {
    style: LangSwitcherStyle.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {
    style: LangSwitcherStyle.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedDark: Story = {
  args: {
    style: LangSwitcherStyle.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryOrange: Story = {
  args: {
    style: LangSwitcherStyle.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const InvertedOrange: Story = {
  args: {
    style: LangSwitcherStyle.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
