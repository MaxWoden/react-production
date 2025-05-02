import type { Meta, StoryObj } from "@storybook/react";

import { NotificationItem } from "./NotificationItem";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof NotificationItem> = {
  title: "entities/NotificationItem",
  component: NotificationItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
