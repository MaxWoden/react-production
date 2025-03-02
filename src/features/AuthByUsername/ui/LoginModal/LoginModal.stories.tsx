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

export const Opened: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const OpenedDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ loginForm: { error: "error" } }),
  ],
};
