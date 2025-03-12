import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text/Text";

import { Card } from "./Card";
import { Theme } from "app/providers/ThemeProvider";

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

export const Opened: Story = {};

export const OpenedDark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
