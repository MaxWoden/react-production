import type { Meta, StoryObj } from "@storybook/react";

import ArticleRating from "./ArticleRating";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";

const meta: Meta<typeof ArticleRating> = {
  title: "features/ArticleRating/ArticleRating",
  component: ArticleRating,
  tags: ["autodocs"],
  decorators: [StoreDecorator({ user: { authData: { id: "1" } } })],
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [
          {
            rate: 4,
          },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
