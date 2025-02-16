import type { Meta, StoryObj } from "@storybook/react";

import { AppLink, AppLinkTheme } from "./AppLink";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: "primary",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "secondary",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const InvertedPrimary: Story = {
  args: {
    children: "inverted primary",
    theme: AppLinkTheme.INVERTED_PRIMARY,
  },
};

export const InvertedSecondary: Story = {
  args: {
    children: "inverted secondary",
    theme: AppLinkTheme.INVERTED_SECONDARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "primary dark",
    theme: AppLinkTheme.PRIMARY,
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const SecondaryDark: Story = {
  args: {
    children: "secondary dark",
    theme: AppLinkTheme.SECONDARY,
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const InvertedPrimaryDark: Story = {
  args: {
    children: "inverted primary dark",
    theme: AppLinkTheme.INVERTED_PRIMARY,
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const InvertedSecondaryDark: Story = {
  args: {
    children: "inverted secondary dark",
    theme: AppLinkTheme.INVERTED_SECONDARY,
  },
  parameters: {
    theme: Theme.DARK,
  },
};
