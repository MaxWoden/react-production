import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import ProfileAverageRating from "./ProfileAverageRating";

const meta: Meta<typeof ProfileAverageRating> = {
  title: "features/ProfileRating/ProfileAverageRating",
  component: ProfileAverageRating,
  tags: ["autodocs"],
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?profileId=1`,
        method: "GET",
        status: 200,
        response: [[{ rate: 5 }, { rate: 4 }]],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ProfileAverageRating>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
