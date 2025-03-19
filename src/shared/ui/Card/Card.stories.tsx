import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Text } from "../Text/Text";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "shared/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: <Text title="Test" text="test" />,
  },
  parameters: {
    theme: Theme.LIGHT,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
