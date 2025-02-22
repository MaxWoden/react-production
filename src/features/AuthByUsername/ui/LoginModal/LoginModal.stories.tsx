import type { Meta, StoryObj } from "@storybook/react";

import { LoginModal } from "./LoginModal";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";

const meta: Meta<typeof LoginModal> = {
  title: "features/LoginModal",
  component: LoginModal,
  tags: ["autodocs"],
  args: {
    isOpen: true,
    portal: false,
  },
  parameters: {
    theme: Theme.LIGHT,
  },
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Opened: Story = {};

export const OpenedDark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
