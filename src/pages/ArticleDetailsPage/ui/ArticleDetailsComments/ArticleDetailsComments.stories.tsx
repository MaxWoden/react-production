import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { ArticleDetailsComments } from "./ArticleDetailsComments";

const meta: Meta<typeof ArticleDetailsComments> = {
  title: "pages/ArticleDetailsPage/ArticleDetailsComments",
  component: ArticleDetailsComments,
  tags: ["autodocs"],
  decorators: [
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          isLoading: false,
          error: undefined,
          ids: ["1", "2"],
          entities: {
            "1": {
              id: "1",
              text: "comment 1",
              user: {
                id: "1",
                username: "admin",
                avatar:
                  "https://i.pinimg.com/736x/37/8a/27/378a270e775265622393da8c0527417e.jpg",
              },
            },
            "2": {
              id: "2",
              text: "comment 2",
              user: {
                id: "2",
                username: "user",
                avatar:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsS6IZjfprBE4HN9HL2T7axwA7b2mOJAJ0Pq7eq8BmrWu4m9vTrdc-R-eQETLKDru0Ds&usqp=CAU",
              },
            },
          },
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] };

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] };

export const Orange: Story = { decorators: [ThemeDecorator(Theme.ORANGE)] };

export const LightEmpty: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          isLoading: false,
          error: undefined,
          ids: [],
          entities: {},
        },
      },
    }),
  ],
};

export const DarkEmpty: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          isLoading: false,
          error: undefined,
          ids: [],
          entities: {},
        },
      },
    }),
  ],
};

export const OrangeEmpty: Story = {
  decorators: [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          isLoading: false,
          error: undefined,
          ids: [],
          entities: {},
        },
      },
    }),
  ],
};

export const LightIsLoading: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          isLoading: true,
          error: undefined,
          ids: [],
          entities: {},
        },
      },
    }),
  ],
};

export const DarkIsLoading: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          isLoading: true,
          error: undefined,
          ids: [],
          entities: {},
        },
      },
    }),
  ],
};

export const OrangeIsLoading: Story = {
  decorators: [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          isLoading: true,
          error: undefined,
          ids: [],
          entities: {},
        },
      },
    }),
  ],
};

export const LightError: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          isLoading: false,
          error: "error",
          ids: [],
          entities: {},
        },
      },
    }),
  ],
};

export const DarkError: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          isLoading: false,
          error: "error",
          ids: [],
          entities: {},
        },
      },
    }),
  ],
};

export const OrangeError: Story = {
  decorators: [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          isLoading: false,
          error: "error",
          ids: [],
          entities: {},
        },
      },
    }),
  ],
};
