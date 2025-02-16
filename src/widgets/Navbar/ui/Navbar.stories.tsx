import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./Navbar";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Navbar> = {
  title: "widgets/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};

export const Dark: Story = {
  args: {},
  parameters: {
    theme: Theme.DARK,
  },
};
