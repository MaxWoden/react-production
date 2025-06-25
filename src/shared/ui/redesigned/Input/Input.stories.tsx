import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "shared/redesigned/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Text",
    value: "Example",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
