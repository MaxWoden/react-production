import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
