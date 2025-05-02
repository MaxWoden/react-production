import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";
import { Theme } from "@/app/providers/ThemeProvider";

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

export const PrimaryLight: Story = {
  args: {
    children: "primary",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SecondaryLight: Story = {
  args: {
    children: "secondary",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const InvertedPrimaryLight: Story = {
  args: {
    children: "inverted primary",
    theme: AppLinkTheme.INVERTED_PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const InvertedSecondaryLight: Story = {
  args: {
    children: "inverted secondary",
    theme: AppLinkTheme.INVERTED_SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
  args: {
    children: "primary dark",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    children: "secondary dark",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedPrimaryDark: Story = {
  args: {
    children: "inverted primary dark",
    theme: AppLinkTheme.INVERTED_PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedSecondaryDark: Story = {
  args: {
    children: "inverted secondary dark",
    theme: AppLinkTheme.INVERTED_SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryOrange: Story = {
  args: {
    children: "primary orange",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const SecondaryOrange: Story = {
  args: {
    children: "secondary orange",
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const InvertedPrimaryOrange: Story = {
  args: {
    children: "inverted primary orange",
    theme: AppLinkTheme.INVERTED_PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedSecondaryOrange: Story = {
  args: {
    children: "inverted secondary orange",
    theme: AppLinkTheme.INVERTED_SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
