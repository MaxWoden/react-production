import type { Meta, StoryObj } from "@storybook/react";

import { NotificationList } from "./NotificationList";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";

const meta: Meta<typeof NotificationList> = {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
  tags: ["autodocs"],
  decorators: [StoreDecorator({ user: { authData: { id: "1" } } })],
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications?userId=1`,
        method: "GET",
        status: 200,
        response: [
          { id: "1", title: "title1", description: "description1" },
          { id: "2", title: "title2", description: "description2" },
          { id: "3", title: "title3", description: "description3" },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };
