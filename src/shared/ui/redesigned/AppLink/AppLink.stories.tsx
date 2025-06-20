import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof AppLink> = {
  title: "shared/redesigned/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: "AppLink primary",
    variant: "primary",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Red: Story = {
  args: {
    children: "AppLink red",
    variant: "red",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
