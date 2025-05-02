import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { CurrencySelect } from "./CurrencySelect";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof CurrencySelect> = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
