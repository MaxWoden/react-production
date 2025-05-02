import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@/app/providers/ThemeProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { EditableProfileCard } from "./EditableProfileCard";

const data = {
  id: "1",
  firstname: "Максим",
  lastname: "Казаков",
  age: 19,
  currency: Currency.RUB,
  country: Country.RU,
  city: "Казань",
  username: "admin",
  avatar:
    "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg",
};

const meta: Meta<typeof EditableProfileCard> = {
  title: "features/editableProfileCard/EditableProfileCard",
  component: EditableProfileCard,
  tags: ["autodocs"],
  decorators: [
    StoreDecorator({
      profile: {
        data: data,
        form: data,
      },
      user: {
        authData: {
          id: "1",
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
