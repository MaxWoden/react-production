import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextTheme } from "./Text";
import { Theme } from "app/providers/ThemeProvider";

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
};

export const Inverted: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    theme: TextTheme.INVERTED,
  },
};

export const Error: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
  },
};

export const onlyText: Story = {
  args: {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
};

export const PrimarytDark: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const InvertedDark: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    theme: TextTheme.INVERTED,
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const ErrorDark: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    theme: TextTheme.ERROR,
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const onlyTitleDark: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
  },
  parameters: {
    theme: Theme.DARK,
  },
};

export const onlyTextDark: Story = {
  args: {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  parameters: {
    theme: Theme.DARK,
  },
};
