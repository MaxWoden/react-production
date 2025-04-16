import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Flex> = {
  title: "shared/Flex",
  component: Flex,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Column: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    direction: "column",
  },
};

export const RowGap4: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    gap: "4",
  },
};

export const ColumnGap32: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    direction: "column",
    gap: "32",
  },
};

export const RowJustifyBetween: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    justify: "between",
  },
};

export const RowJustifyAround: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    justify: "around",
  },
};
