import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "./LoginForm";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],

  parameters: {
    theme: Theme.LIGHT,
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Opened: Story = {};

export const OpenedDark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
