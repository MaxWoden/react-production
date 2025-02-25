import type { Meta, StoryObj } from "@storybook/react";

import { PageError } from "./PageError";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof PageError> = {
  title: "widgets/PageError",
  component: PageError,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  decorators: [],
};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
