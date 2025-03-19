import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { ProfileCard } from "./ProfileCard";
import { Theme } from "app/providers/ThemeProvider";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  args: {
    data: {
      firstname: "Максим",
      lastname: "Казаков",
      age: 19,
      currency: Currency.RUB,
      country: Country.RU,
      city: "Казань",
      username: "adminfds",
      avatar:
        "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const withErrorLight: Story = {
  args: {
    error: "true",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LoadingLight: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const withErrorDark: Story = {
  args: {
    error: "true",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LoadingDark: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const withErrorOrange: Story = {
  args: {
    error: "true",
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const LoadingOrange: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
