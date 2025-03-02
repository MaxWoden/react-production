import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonSize, ButtonTheme } from "./Button";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";

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
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Disabled: Story = {
  args: {
    children: "disabled",
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Clear: Story = {
  args: {
    children: "clear",
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearInverted: Story = {
  args: {
    children: "clear inverted",
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearM: Story = {
  args: {
    children: "clear",
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.SIZE_M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearL: Story = {
  args: {
    children: "clear",
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.SIZE_L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearXL: Story = {
  args: {
    children: "clear",
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.SIZE_XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Outline: Story = {
  args: {
    children: "outline",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineInverted: Story = {
  args: {
    children: "outline",
    theme: ButtonTheme.OUTLINE_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const NoneDark: Story = {
  args: {
    children: "none dark",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearDark: Story = {
  args: {
    children: "clear dark",
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
  args: {
    children: "outline dark",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
  args: {
    children: ">",
    square: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquareSizeM: Story = {
  args: {
    children: ">",
    square: true,
    size: ButtonSize.SIZE_M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    square: true,
    size: ButtonSize.SIZE_L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    square: true,
    size: ButtonSize.SIZE_XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
