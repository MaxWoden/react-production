import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { PageError } from "./PageError";

const meta: Meta<typeof PageError> = {
  title: "widgets/PageError",
  component: PageError,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
