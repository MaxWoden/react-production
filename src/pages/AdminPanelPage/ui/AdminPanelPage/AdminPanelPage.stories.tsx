import type { Meta, StoryObj } from "@storybook/react";

import AdminPanelPage from "./AdminPanelPage";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof AdminPanelPage> = {
  title: "pages/AdminPanelPage",
  component: AdminPanelPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
