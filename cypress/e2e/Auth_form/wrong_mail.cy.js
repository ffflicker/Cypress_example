import { credentials, selectors } from '../../fixtures/auth_variables';

describe('Негативный кейс авторизации', () => {
  it('Неудачная авторизация с неправильным логином и правильным паролем', () => {
    cy.visit('https://login.qa.studio');
    cy.get(selectors.emailField).type(credentials.invalidEmail);
    cy.get(selectors.passwordField).type(credentials.validPassword);
    cy.get(selectors.loginButton).click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get(selectors.exitButton).should('be.visible').and('have.class', 'exitButton defaultButton').click();
  });
});