import type { Meta, StoryObj } from "@storybook/react";

import { ArticleViewSwitcher } from "./ArticleViewSwitcher";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ArticleView } from "entities/Article";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";

const meta: Meta<typeof ArticleViewSwitcher> = {
  title: "widgets/ArticleViewSwitcher",
  component: ArticleViewSwitcher,
  tags: ["autodocs"],
  decorators: [StoreDecorator({})],
  args: {
    view: ArticleView.LIST,
  },
};

export default meta;
type Story = StoryObj<typeof ArticleViewSwitcher>;

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
