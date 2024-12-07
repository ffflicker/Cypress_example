import { credentials, selectors } from '../../fixtures/auth_variables';

describe('Логика восстановления пароля', () => {
  it('Успешное восстановление пароля с рандомной почтой', () => {
    const randomEmail = credentials.randomEmail();
    cy.visit('https://login.qa.studio');
    cy.contains('Забыли пароль').click();
    cy.get(selectors.emailForgotField).type(randomEmail);
    cy.get(selectors.restoreEmailButton).click();
    cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
    cy.get(selectors.exitButton).should('be.visible').and('have.class', 'exitButton defaultButton').click();
  });
});