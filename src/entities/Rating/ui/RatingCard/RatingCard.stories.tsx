import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { RatingCard } from "./RatingCard";

const meta: Meta<typeof RatingCard> = {
  title: "entities/RatingCard",
  component: RatingCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
