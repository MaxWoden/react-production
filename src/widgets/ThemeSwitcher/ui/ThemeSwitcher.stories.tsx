import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitcher, ThemeSwitcherStyle } from "./ThemeSwitcher";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {
  args: {
    style: ThemeSwitcherStyle.PRIMARY,
  },
};

export const Inverted: Story = {
  args: {
    style: ThemeSwitcherStyle.INVERTED,
  },
};

export const PrimaryDark: Story = {
  args: {
    style: ThemeSwitcherStyle.PRIMARY,
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const InvertedDark: Story = {
  args: {
    style: ThemeSwitcherStyle.INVERTED,
  },
  parameters: {
    theme: Theme.DARK,
  },
};
