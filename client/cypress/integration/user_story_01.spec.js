// User should be able to search for a type of product and see all prices/reviews/locations/photos

describe('test_case_01', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can go to the search bar, typing a product type and see the matched products', () => {
    cy.get('#combo-box-demo')
      .click()
      .type('coats', {delay: 200})
      .wait(2000)
      .type('{downarrow}', {delay: 500})
      .type('{downarrow}', {delay: 500})
      .type('{enter}')
    });
});