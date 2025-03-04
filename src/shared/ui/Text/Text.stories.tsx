import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import { Text, TextAlign, TextSize, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Size_L: Story = {
  args: {
    size: TextSize.L,
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Left: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    align: TextAlign.LEFT,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Right: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    align: TextAlign.RIGHT,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Center: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    align: TextAlign.CENTER,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Inverted: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    theme: TextTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Error: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const onlyTitle: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const onlyText: Story = {
  args: {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimarytDark: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedDark: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    theme: TextTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
  args: {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
