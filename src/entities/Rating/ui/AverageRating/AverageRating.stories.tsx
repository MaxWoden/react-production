import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { AverageRating } from "./AverageRating";

const meta: Meta<typeof AverageRating> = {
  title: "entities/Rating/AverageRating",
  component: AverageRating,
  tags: ["autodocs"],
  args: {
    data: [{ rate: 2 }, { rate: 3 }, { rate: 3 }],
  },
};

export default meta;
type Story = StoryObj<typeof AverageRating>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };

export const LightLoading: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: { isLoading: true },
};

export const DarkLoading: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: { isLoading: true },
};

export const OrangeLoading: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
  args: { isLoading: true },
};
