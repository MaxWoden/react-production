import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../Button/Button";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "shared/Popups/Popover",
  component: Popover,
  tags: ["autodocs"],
  args: {
    trigger: <Button>button</Button>,
    children: (
      <div>
        <p>p1</p>
        <p>p2</p>
        <p>p3</p>
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };
export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };
export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
