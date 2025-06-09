import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import type { Meta, StoryObj } from "@storybook/react";
import { AvatarDropdown } from "./AvatarDropdown";
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";

const meta: Meta<typeof AvatarDropdown> = {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
  tags: ["autodocs"],
  decorators: [StoreDecorator({ user: { authData: { id: "1" } } })],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };
export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };
export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
