import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ArticleBlockType, ArticleType } from "../../consts/consts";
import { Article } from "../../types/article";
import { fetchArticleById } from "./fetchArticleById";

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

describe("fetchProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));
    const result = await thunk.callThunk(article.id);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.payload).toEqual(article);
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  test("error login", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(article.id);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
