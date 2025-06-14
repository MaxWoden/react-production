export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId("EditableProfileCardHeader.EditButton").click();
  cy.getByTestId("ProfileCard.firstname").clear().type(firstname);
  cy.getByTestId("ProfileCard.lastname").clear().type(lastname);
  cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: "zxc" },
    body: {
      id: "4",
      firstname: "test",
      lastname: "user",
      age: 20,
      currency: "RUB",
      country: "Russia",
      city: "Казань",
      username: "testuser",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsS6IZjfprBE4HN9HL2T7axwA7b2mOJAJ0Pq7eq8BmrWu4m9vTrdc-R-eQETLKDru0Ds&usqp=CAU",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): ReturnType<typeof cy.get>;
    }
  }
}
