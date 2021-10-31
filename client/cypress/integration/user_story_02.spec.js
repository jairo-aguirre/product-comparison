// User should be able to choose a category

describe('test_case_02', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("can select any given category from the navbar and see the category's products", () => {
    cy.get('.MuiTab-wrapper')
      .contains("Women's Clothing")
      .wait(2500)
      .click()
      .get('header')
      .first()
      .scrollIntoView({ duration: 2000 })
    });
});