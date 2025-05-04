import type { Meta, StoryObj } from "@storybook/react";

import AverageArticleRating from "./AverageArticleRating";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof AverageArticleRating> = {
  title: "features/ArticleRating/AverageArticleRating",
  component: AverageArticleRating,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AverageArticleRating>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
