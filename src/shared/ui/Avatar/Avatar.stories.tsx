import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { Theme } from "@/shared/const/theme";
import avatar from "@/shared/assets/tests/avatar.jpg";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    size: 200,
    src: avatar,
  },
  parameters: {
    theme: Theme.LIGHT,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const SmallLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    size: 40,
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SmallDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    size: 40,
  },
};
export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const SmallOrange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  args: {
    size: 40,
  },
};
