import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { Theme } from "app/providers/ThemeProvider";
import AvatarImg from "shared/assets/avatar.jpg";

const meta: Meta<typeof Avatar> = {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    size: 200,
    src: AvatarImg,
  },
  parameters: {
    theme: Theme.LIGHT,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};

export const Small: Story = {
  args: {
    size: 40,
  },
};
