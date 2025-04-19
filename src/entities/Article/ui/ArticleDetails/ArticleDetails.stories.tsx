import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/Decorators/ThemeDecorator";
import {
  Article,
  ArticleBLockType,
  ArticleType,
} from "../../model/types/article";
import { ArticleDetails } from "./ArticleDetails";

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
      type: ArticleBLockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: ["Параграф 1", "Параграф 2", "Параграф 3"],
    },
    {
      id: "5",
      type: ArticleBLockType.CODE,
      language: "java",
      code: "console.log('Hello, World!');",
    },
    {
      id: "4",
      type: ArticleBLockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: ["Параграф 1", "Параграф 2"],
    },
    {
      id: "2",
      type: ArticleBLockType.IMAGE,
      title: "Рисунок 1 - скриншот сайта",
      src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    },
    {
      id: "3",
      type: ArticleBLockType.CODE,
      language: "javascript",
      code: "console.log('Code');",
    },
  ],
};

const meta: Meta<typeof ArticleDetails> = {
  title: "entities/Article/ArticleDetails",
  component: ArticleDetails,
  tags: ["autodocs"],
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

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
