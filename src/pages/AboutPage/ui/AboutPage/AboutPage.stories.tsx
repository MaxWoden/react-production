import type { Meta, StoryObj } from "@storybook/react";

import AboutPage from "./AboutPage";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AboutPage> = {
  title: "pages/AboutPage",
  component: AboutPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
