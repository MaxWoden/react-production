import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { Article, ArticleBlockType, ArticleType } from "@/entities/Article";
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/Decorators/ThemeDecorator";
import { ArticleDetailsPageSchema } from "../../model/types";
import ArticleDetailsPage from "./ArticleDetailsPage";

const article: Article = {
  id: "1",
  title: "JavaScript news",
  subtitle: "Что нового в JS за 2025 год?",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6sMfLmRjh2jzr0fZKfxKnczeq6Qu-uyPi613_ZtUjVj4JNmW26pGxB0Bgu3h_MErxcI&usqp=CAU",
  views: 1488,
  createdAt: "03.03.2025",
  user: {
    id: "1",
    username: "user",
  },
  type: [ArticleType.IT],
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: ["Параграф 1", "Параграф 2", "Параграф 3"],
    },
    {
      id: "5",
      type: ArticleBlockType.CODE,
      language: "java",
      code: "console.log('Hello, World!');",
    },
    {
      id: "4",
      type: ArticleBlockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: ["Параграф 1", "Параграф 2"],
    },
    {
      id: "2",
      type: ArticleBlockType.IMAGE,
      title: "Рисунок 1 - скриншот сайта",
      src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    },
    {
      id: "3",
      type: ArticleBlockType.CODE,
      language: "javascript",
      code: "console.log('Code');",
    },
  ],
};

const articleDetailsPageReducer: DeepPartial<ArticleDetailsPageSchema> = {
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
};

const meta: Meta<typeof ArticleDetailsPage> = {
  title: "pages/ArticleDetailsPage/ArticleDetailsPage",
  component: ArticleDetailsPage,
  tags: ["autodocs"],
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
      articleDetailsPage: articleDetailsPageReducer,
    }),
  ],
  parameters: {
    mockData: [
      {
        url: "https://react-production-server.onrender.com/articles",
        method: "GET",
        status: 200,
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Loading: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const Error: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetails: {
        error: "error",
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LoadingDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const ErrorDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: {
        error: "error",
      },
    }),
  ],
};

export const Orange: Story = {
  decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const LoadingOrange: Story = {
  decorators: [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const ErrorOrange: Story = {
  decorators: [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
      articleDetails: {
        error: "error",
      },
    }),
  ],
};

export const EditableLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetails: {
        data: article,
      },
      articleDetailsPage: articleDetailsPageReducer,
      user: { authData: { id: "1" } },
    }),
  ],
};

export const EditableDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: {
        data: article,
      },
      articleDetailsPage: articleDetailsPageReducer,
      user: { authData: { id: "1" } },
    }),
  ],
};

export const EditableOrange: Story = {
  decorators: [
    ThemeDecorator(Theme.ORANGE),
    StoreDecorator({
      articleDetails: {
        data: article,
      },
      articleDetailsPage: articleDetailsPageReducer,
      user: { authData: { id: "1" } },
    }),
  ],
};
