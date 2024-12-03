import { credentials, selectors } from '/Users/matvey/Desktop/cypress_lab/cypress/fixtures/auth_variables.js';

describe('Негативный кейс валидации логина', () => {
  it('Ошибка валидации при вводе логина без @', () => {
    cy.visit('https://login.qa.studio');
    cy.get(selectors.emailField).type(credentials.validEmail);
    cy.get(selectors.passwordField).type(credentials.validPassword);
    cy.get(selectors.loginButton).click();
    cy.contains(selectors.validationErrorText).should('be.visible');
    cy.get(selectors.exitButton).should('be.visible').and('have.class', 'exitButton defaultButton').click();
  });
});