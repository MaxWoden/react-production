import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Skeleton> = {
  title: "shared/redesigned/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    width: "100%",
    height: 200,
  },
};

export const CircleLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const CircleOrange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
};
