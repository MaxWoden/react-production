import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Select> = {
  title: "shared/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    options: [
      { value: "1", content: "One" },
      { value: "2", content: "Two" },
      { value: "3", content: "Three" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const LabelLight: Story = {
  args: {
    label: "Select",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ReadonlyLight: Story = {
  args: {
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LabelReadonlyLight: Story = {
  args: {
    label: "Select",
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LabelDark: Story = {
  args: {
    label: "Select",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ReadonlyDark: Story = {
  args: {
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LabelReadonlyDark: Story = {
  args: {
    label: "Select",
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const LabelOrange: Story = {
  args: {
    label: "Select",
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const ReadonlyOrange: Story = {
  args: {
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const LabelReadonlyOrange: Story = {
  args: {
    label: "Select",
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
