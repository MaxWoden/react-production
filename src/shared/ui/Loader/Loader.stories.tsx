import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
