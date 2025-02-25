import type { Meta, StoryObj } from "@storybook/react";

import ProfilePage from "./ProfilePage";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
