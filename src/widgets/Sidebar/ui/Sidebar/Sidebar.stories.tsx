import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Sidebar> = {
  title: "widgets/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

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
    StoreDecorator({ user: { authData: {} } }),
    ThemeDecorator(Theme.DARK),
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
