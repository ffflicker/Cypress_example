import { credentials, selectors } from '/Users/matvey/Desktop/cypress_lab/cypress/fixtures/pokemons_variables.js';

describe('User-flow для покупки аватара', () => {
  it('е2е автотест для покемонов: на покупку нового аватара для своего тренера', () => {
    cy.viewport('macbook-15');
    cy.visit('https://pokemonbattle.ru');
    cy.get(selectors.emailField).type(credentials.validEmail);
    cy.get(selectors.passwordField).type(credentials.validPassword);
    cy.get('.auth__button.k_form_send_auth').click();
    cy.wait(1500)
    cy.get('.header__container > .header__id').click({ force: true });
    cy.get('[href="/shop"]').click();
    cy.get('.available > button').first().click({ force: true });
    cy.get('.credit').type('4111111111111111');
    cy.get('.k_input_ccv').type('125');
    cy.get('.k_input_date').type('1025');
    cy.get('.k_input_name').type('NAME');
    cy.get('.pay-btn').click();
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__submit-button').click();
    cy.contains('Покупка прошла успешно').should('be.visible');
    cy.get('.payment__adv.payment-adv-blue').click()
  });
});