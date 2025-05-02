import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { Header } from "./Header";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Header> = {
  title: "widgets/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Authed: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ user: { authData: {} } }),
  ],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const AuthedDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
  ],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const AuthedOrange: Story = {
  decorators: [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({ user: { authData: {} } }),
  ],
};
