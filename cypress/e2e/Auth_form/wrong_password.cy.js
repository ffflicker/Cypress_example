import { credentials, selectors } from '/Users/matvey/Desktop/cypress_lab/cypress/fixtures/auth_variables.js';

describe('Негативный кейс авторизации', () => {
  it('Неудачная авторизация с правильным логином и неправильным паролем', () => {
    cy.visit('https://login.qa.studio');
    cy.get(selectors.emailField).type(credentials.validEmail);
    cy.get(selectors.passwordField).type(credentials.invalidPassword);
    cy.get(selectors.loginButton).click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get(selectors.exitButton).should('be.visible').and('have.class', 'exitButton defaultButton').click();
  });
});