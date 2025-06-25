import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Tabs> = {
  title: "shared/redesigned/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    tabs: [
      { value: "1", content: "One" },
      { value: "2", content: "Two" },
      { value: "3", content: "Three" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
