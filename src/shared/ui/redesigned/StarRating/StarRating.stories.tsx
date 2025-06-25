import type { Meta, StoryObj } from "@storybook/react";

import { StarRating } from "./StarRating";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof StarRating> = {
  title: "shared/redesigned/StarRating",
  component: StarRating,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Opened: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
