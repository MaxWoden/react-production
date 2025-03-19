import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleSortField } from "entities/Article";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArticlesPageSortSelect } from "./ArticlesPageSortSelect";

const meta: Meta<typeof ArticlesPageSortSelect> = {
  title: "widgets/ArticlesPageSortSelect",
  component: ArticlesPageSortSelect,
  tags: ["autodocs"],
  decorators: [StoreDecorator({ articlesPage: {} })],
  args: {
    sort: ArticleSortField.VIEWS,
    order: "ASC",
  },
};

export default meta;
type Story = StoryObj<typeof ArticlesPageSortSelect>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
