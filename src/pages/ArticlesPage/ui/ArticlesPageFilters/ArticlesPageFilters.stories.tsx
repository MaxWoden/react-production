import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { ArticlesPageFilters } from "./ArticlesPageFilters";

const meta: Meta<typeof ArticlesPageFilters> = {
  title: "pages/ArticlesPage/ArticlesPageFilters",
  component: ArticlesPageFilters,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
