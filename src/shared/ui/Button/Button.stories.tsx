import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonTheme } from "./Button";
import { Children } from "react";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const None: Story = {
  args: {
    children: "none",
  },
};

export const Clear: Story = {
  args: {
    children: "clear",
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "outline",
    theme: ButtonTheme.OUTLINE,
  },
};

export const NoneDark: Story = {
  args: {
    children: "none dark",
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const ClearDark: Story = {
  args: {
    children: "clear dark",
    theme: ButtonTheme.CLEAR,
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "outline dark",
    theme: ButtonTheme.OUTLINE,
  },
  parameters: {
    theme: Theme.DARK,
  },
};
