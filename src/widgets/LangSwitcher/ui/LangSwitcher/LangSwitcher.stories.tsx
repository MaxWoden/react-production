import type { Meta, StoryObj } from "@storybook/react";

import { LangSwitcher, LangSwitcherStyle } from "./LangSwitcher";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof LangSwitcher> = {
  title: "widgets/LangSwitcher",
  component: LangSwitcher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Primary: Story = {
  args: {
    style: LangSwitcherStyle.PRIMARY,
  },
};

export const Inverted: Story = {
  args: {
    style: LangSwitcherStyle.INVERTED,
  },
};

export const PrimaryDark: Story = {
  args: {
    style: LangSwitcherStyle.PRIMARY,
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const InvertedDark: Story = {
  args: {
    style: LangSwitcherStyle.INVERTED,
  },
  parameters: {
    theme: Theme.DARK,
  },
};
