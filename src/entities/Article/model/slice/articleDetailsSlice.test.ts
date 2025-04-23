import { ArticleBlockType, ArticleType } from "../consts/consts";
import { Article } from "../types/article";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";

describe("loginSlice", () => {
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

  test("test set username", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: "error",
      data: article,
    };
    expect(state.error).toEqual("error");
    expect(state.isLoading).toEqual(false);
    expect(state.data).toEqual(article);
  });
});
