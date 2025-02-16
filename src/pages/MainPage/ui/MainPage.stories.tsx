import type { Meta, StoryObj } from "@storybook/react";

import MainPage from "./MainPage";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof MainPage> = {
  title: "pages/MainPage",
  component: MainPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
