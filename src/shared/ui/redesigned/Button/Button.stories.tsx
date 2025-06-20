import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/redesigned/Button",
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
    variant: "clear",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearInverted: Story = {
  args: {
    children: "clear inverted",
    variant: "clear_inverted",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearM: Story = {
  args: {
    children: "clear",
    variant: "clear",
    size: "size_m",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearL: Story = {
  args: {
    children: "clear",
    variant: "clear",
    size: "size_l",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearXL: Story = {
  args: {
    children: "clear",
    variant: "clear",
    size: "size_xl",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Outline: Story = {
  args: {
    children: "outline",
    variant: "outline",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineInverted: Story = {
  args: {
    children: "outline",
    variant: "outline_inverted",
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
    variant: "clear",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
  args: {
    children: "outline dark",
    variant: "outline",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const NoneOrange: Story = {
  args: {
    children: "none orange",
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const ClearOrange: Story = {
  args: {
    children: "clear orange",
    variant: "clear",
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const OutlineOrange: Story = {
  args: {
    children: "outline orange",
    variant: "outline",
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
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
    size: "size_m",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    square: true,
    size: "size_l",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    square: true,
    size: "size_xl",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
