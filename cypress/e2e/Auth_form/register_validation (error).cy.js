import { credentials, selectors } from '../../fixtures/auth_variables';

describe('Проверка приведения логина к строчным буквам', () => {
  it('Авторизация с логином с заглавными буквами, тест на баг с регистрацией', () => {
    cy.visit('https://login.qa.studio');
    cy.get(selectors.emailField).type(credentials.invalidEmail);
    cy.get(selectors.passwordField).type(credentials.validPassword);
    cy.get(selectors.loginButton).click();
    cy.contains('Авторизация прошла успешно').should('be.visible');
    cy.get(selectors.exitButton).should('be.visible').and('have.class', 'exitButton defaultButton').click();
  });
});