import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "shared/redesigned/Text",
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
    size: "l",
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Size_S: Story = {
  args: {
    size: "s",
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Left: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    align: "left",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Right: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    align: "right",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Center: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    align: "center",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Accent: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    variant: "accent",
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Error: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    variant: "error",
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

export const AccentDark: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    variant: "accent",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    variant: "error",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleOrange: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const onlyTextOrange: Story = {
  args: {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const PrimaryOrange: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const AccentOrange: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    variant: "accent",
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const ErrorOrange: Story = {
  args: {
    title: "Lorem, ipsum dolor.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur natus mollitia tempore quia iure deserunt asperiores, omnis quae. Esse, cum?",
    variant: "error",
  },
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
