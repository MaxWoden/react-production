import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: "pages/ArticleDetailsPage/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };

export const LightEditable: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      user: { authData: { id: "1" } },
      articleDetails: { data: { user: { id: "1" } } },
    }),
  ],
};

export const DarkEditable: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: { authData: { id: "1" } },
      articleDetails: { data: { user: { id: "1" } } },
    }),
  ],
};

export const OrangeEditable: Story = {
  decorators: [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
      user: { authData: { id: "1" } },
      articleDetails: { data: { user: { id: "1" } } },
    }),
  ],
};
