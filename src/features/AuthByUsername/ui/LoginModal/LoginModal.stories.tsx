import type { Meta, StoryObj } from "@storybook/react";

import { LoginModal } from "./LoginModal";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";

const meta: Meta<typeof LoginModal> = {
  title: "features/LoginModal",
  component: LoginModal,
  tags: ["autodocs"],
  args: {
    isOpen: true,
    portal: false,
  },
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const OpenedLight: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const ErrorLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ loginForm: { error: "error" } }),
  ],
};

export const OpenedDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { error: "error" } }),
  ],
};

export const OpenedOrange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const ErrorOrange: Story = {
  decorators: [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({ loginForm: { error: "error" } }),
  ],
};
