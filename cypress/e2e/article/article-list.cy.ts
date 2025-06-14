describe("Пользователь заходит на страницу со списком статей", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit("articles");
    });
  });
  it.skip("И статьи успешно подгружаются (заскипано)", () => {
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 0);
  });

  it("И статьи успешно подгружаются на стабах (фикстурах)", () => {
    cy.intercept("GET", "**/articles?*", { fixture: "articles.json" });
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 0);
  });
});
