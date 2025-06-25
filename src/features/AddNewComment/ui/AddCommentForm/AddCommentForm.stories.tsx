import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "./AddCommentForm";

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

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
