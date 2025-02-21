import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Text",
    value: "Example",
  },
  parameters: {
    theme: Theme.LIGHT,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Opened: Story = {};

export const OpenedDark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
