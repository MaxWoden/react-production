import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Sidebar> = {
  title: "widgets/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};

export const Dark: Story = {
  args: {},
  parameters: {
    theme: Theme.DARK,
  },
};
