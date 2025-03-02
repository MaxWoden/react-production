import type { Meta, StoryObj } from "@storybook/react";

import { Refresher } from "./Refresher";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof Refresher> = {
  title: "shared/Refresher",
  component: Refresher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Refresher>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
