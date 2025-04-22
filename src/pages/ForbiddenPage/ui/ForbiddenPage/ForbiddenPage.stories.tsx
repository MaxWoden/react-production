import type { Meta, StoryObj } from "@storybook/react";

import {ForbiddenPage} from "./ForbiddenPage";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";

const meta: Meta<typeof ForbiddenPage> = {
  title: "pages/ForbiddenPage",
  component: ForbiddenPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
