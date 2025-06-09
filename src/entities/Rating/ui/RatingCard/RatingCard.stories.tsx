import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { RatingCard } from "./RatingCard";

const meta: Meta<typeof RatingCard> = {
  title: "entities/Rating/RatingCard",
  component: RatingCard,
  tags: ["autodocs"],
  args: {
    hasFeedback: true,
    feedbackTitle: "feedback",
    title: "title",
  },
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
