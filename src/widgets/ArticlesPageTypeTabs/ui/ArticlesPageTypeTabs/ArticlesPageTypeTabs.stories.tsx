import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { ArticleType } from "entities/Article";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArticlesPageTypeTabs } from "./ArticlesPageTypeTabs";

const meta: Meta<typeof ArticlesPageTypeTabs> = {
  title: "widgets/ArticlesPageTypeTabs",
  component: ArticlesPageTypeTabs,
  tags: ["autodocs"],
  decorators: [StoreDecorator({ articlesPage: {} })],
  args: {
    type: ArticleType.ALL,
  },
};

export default meta;
type Story = StoryObj<typeof ArticlesPageTypeTabs>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
