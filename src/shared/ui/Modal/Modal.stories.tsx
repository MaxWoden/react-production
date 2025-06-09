import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    isOpen: true,
    portal: false,
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tempore dignissimos, velit doloribus ab quasi maiores iusto! A, reiciendis debitis.",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Opened: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
