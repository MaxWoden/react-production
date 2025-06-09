import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { CommentCard } from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  tags: ["autodocs"],
  args: {
    comment: {
      id: "1",
      text: "comment 1",
      user: {
        id: "1",
        username: "admin",
        avatar:
          "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Loading: Story = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LoadingDark: Story = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const LoadingOrange: Story = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
