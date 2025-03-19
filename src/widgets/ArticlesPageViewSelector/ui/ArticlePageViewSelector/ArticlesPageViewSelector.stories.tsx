import type { Meta, StoryObj } from "@storybook/react";

import { ArticlesPageViewSelector } from "./ArticlesPageViewSelector";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArticleView } from "entities/Article";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";

const meta: Meta<typeof ArticlesPageViewSelector> = {
  title: "widgets/ArticlesPageViewSelector",
  component: ArticlesPageViewSelector,
  tags: ["autodocs"],
  decorators: [StoreDecorator({ articlesPage: {} })],
  args: {
    view: ArticleView.LIST,
  },
};

export default meta;
type Story = StoryObj<typeof ArticlesPageViewSelector>;

export const LightList: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LightGrid: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    view: ArticleView.GRID,
  },
};

export const DarkList: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkGrid: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    view: ArticleView.GRID,
  },
};
