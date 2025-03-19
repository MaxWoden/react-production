import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const withErrorLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        readonly: true,
        error: "true",
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const withErrorDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        readonly: true,
        error: "true",
      },
    }),
  ],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const withErrorOrange: Story = {
  decorators: [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
      profile: {
        readonly: true,
        error: "true",
      },
    }),
  ],
};
