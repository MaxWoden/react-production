import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
  title: "entities/CommentList",
  component: CommentList,
  tags: ["autodocs"],
  args: {
    comments: [
      {
        id: "1",
        text: "comment 1",
        user: {
          id: "1",
          username: "admin",
          avatar:
            "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg",
        },
      },
      {
        id: "2",
        text: "comment 2",
        user: {
          id: "2",
          username: "user",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsS6IZjfprBE4HN9HL2T7axwA7b2mOJAJ0Pq7eq8BmrWu4m9vTrdc-R-eQETLKDru0Ds&usqp=CAU",
        },
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Empty: Story = {
  args: { comments: [] },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Loading: Story = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const EmptyDark: Story = {
  args: { comments: [] },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LoadingDark: Story = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.DARK)],
};
