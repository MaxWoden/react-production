import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";

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

export const Label: Story = {
  args: {
    label: "Select",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Readonly: Story = {
  args: {
    readonly: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LabelReadonly: Story = {
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
