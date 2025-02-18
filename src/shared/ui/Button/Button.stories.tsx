import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonSize, ButtonTheme } from "./Button";
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

export const ClearM: Story = {
  args: {
    children: "clear",
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.SIZE_M,
  },
};

export const ClearL: Story = {
  args: {
    children: "clear",
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.SIZE_L,
  },
};

export const ClearXL: Story = {
  args: {
    children: "clear",
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.SIZE_XL,
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

export const Square: Story = {
  args: {
    children: ">",
    square: true,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: ">",
    square: true,
    size: ButtonSize.SIZE_M,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    square: true,
    size: ButtonSize.SIZE_L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    square: true,
    size: ButtonSize.SIZE_XL,
  },
};
