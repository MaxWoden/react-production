import type { Meta, StoryObj } from "@storybook/react";

import { NotFoundPage } from "./NotFoundPage";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof NotFoundPage> = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
