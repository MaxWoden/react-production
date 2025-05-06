import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import ArticleAverageRating from "./ArticleAverageRating";

const meta: Meta<typeof ArticleAverageRating> = {
  title: "features/ArticleRating/ArticleAverageRating",
  component: ArticleAverageRating,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleAverageRating>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
