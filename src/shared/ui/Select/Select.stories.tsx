import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { Theme } from "app/providers/ThemeProvider";

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

export const Light: Story = {};

export const Label: Story = {
  args: {
    label: "Select",
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
  },
};

export const LabelReadonly: Story = {
  args: {
    label: "Select",
    readonly: true,
  },
};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};

export const LabelDark: Story = {
  args: {
    label: "Select",
  },
  parameters: {
    theme: Theme.DARK,
  },
};
