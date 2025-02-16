import type { Meta, StoryObj } from "@storybook/react";

import { Refresher } from "./Refresher";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Refresher> = {
  title: "shared/Refresher",
  component: Refresher,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Refresher>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
