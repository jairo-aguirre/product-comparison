// User should be able to select specific products to compare

describe('test_case_03', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can select and compare up to 3 products', () => {
    cy.get('.MuiTab-wrapper')
      .contains("Electronics")
      .wait(2500)
      .click()
      .get('#heart0')
      .find('i')
      .wait(3000)
      .click()
      .get('#heart2')
      .wait(1000)
      .click()
      .find('i')
      .get('#heart6')
      .find('i')
      .wait(1000)
      .click()
      .get('header')
      .first()
      .scrollIntoView({ duration: 2000 })
      .get('.MuiButton-label')
      .contains('Compare')
      .wait(1000)
      .click()
    });
});