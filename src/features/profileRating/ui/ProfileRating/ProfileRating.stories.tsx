import type { Meta, StoryObj } from "@storybook/react";

import ProfileRating from "./ProfileRating";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof ProfileRating> = {
  title: "features/ProfileRating",
  component: ProfileRating,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
