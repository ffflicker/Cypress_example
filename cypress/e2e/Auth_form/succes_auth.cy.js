import { credentials, selectors } from '../../fixtures/auth_variables';

describe('Позитивный кейс авторизации', () => {
  it('Успешная авторизация с проверкой текста и наличия кнопки крестик', () => {
    cy.visit('https://login.qa.studio');
    cy.get(selectors.emailField).type(credentials.validEmail);
    cy.get(selectors.passwordField).type(credentials.validPassword);
    cy.contains('button', 'Войти').click();
    cy.contains('Авторизация прошла успешно').should('be.visible');
    cy.get(selectors.exitButton).should('be.visible').and('have.class', 'exitButton defaultButton').click();
  });
});