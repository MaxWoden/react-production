import { Article } from "../../../src/entities/Article";

const defaultArticle = {
  title: "TESTING ARTICLE",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.04.2022",
  userId: "1",
  type: ["IT"],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: "POST",
      url: `http://localhost:8000/articles`,
      headers: { Authorization: "zxc" },
      body: article ?? defaultArticle,
    })
    .then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: "DELETE",
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: "zxc" },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(profileId: string): ReturnType<typeof cy.get>;
    }
  }
}
