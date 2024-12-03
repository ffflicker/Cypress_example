export const credentials = {
  validEmail: 'user@mail.ru',
  invalidEmail: 'wrongemail@mail.ru',
  validPassword: 'parol5500',
  invalidPassword: 'wrongPassword123',

  randomEmail: () => {
    const randomString = Math.random().toString(36).substring(2, 10); // Генерация случайной строки
    return `${randomString}@example.com`; // Формирование email
  }

};

export const selectors = {
  emailField: '#mail',
  passwordField: '#pass',
  loginButton: '#loginButton',
  errorText: 'Такого логина или пароля нет',
  successText: 'Авторизация прошла успешно',
  exitButton: '#exitMessageButton',
  restorePasswordButton: '#restoreEmailButton',
  emailForgotField: '#mailForgot',
  restoreEmailButton: '#restoreEmailButton',
  validationErrorText: 'Нужно исправить проблему валидации'
};