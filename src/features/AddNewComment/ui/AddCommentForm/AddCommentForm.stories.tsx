import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import AddCommentForm from "./AddCommentForm";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof AddCommentForm> = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  tags: ["autodocs"],
  args: {
    onSendComment: action("onSendComment"),
  },
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
