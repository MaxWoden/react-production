import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader";

const meta: Meta<typeof EditableProfileCardHeader> = {
  title: "features/editableProfileCard/EditableProfileCardHeader",
  component: EditableProfileCardHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
