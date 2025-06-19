import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import type { Meta, StoryObj } from "@storybook/react";
import { LangSwitcher } from "./LangSwitcher";

const meta: Meta<typeof LangSwitcher> = {
  title: "features/LangSwitcher",
  component: LangSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

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
