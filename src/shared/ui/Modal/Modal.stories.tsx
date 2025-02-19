import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    isOpen: true,
    needPortal: false,
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tempore dignissimos, velit doloribus ab quasi maiores iusto! A, reiciendis debitis.",
  },
  parameters: {
    theme: Theme.LIGHT,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Opened: Story = {};

export const OpenedDark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
