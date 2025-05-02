import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

import { Dropdown } from "./Dropdown";
import { Avatar } from "../../../Avatar/Avatar";

const meta: Meta<typeof Dropdown> = {
  title: "shared/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  args: {
    items: [
      { content: "Профиль", href: "/" },
      { content: "Выйти", onClick: () => {} },
    ],
    trigger: (
      <Avatar
        size={50}
        src="https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg"
      />
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };
export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };
export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
