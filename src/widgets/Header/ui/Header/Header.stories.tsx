import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Header> = {
  title: "widgets/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
