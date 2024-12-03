export const credentials = {
    validEmail: 'user@gmail.com',
    invalidEmail: 'wrongEmail@mail.ru',
    validPassword: '1parol5500',
    invalidPassword: 'wrongPassword123',

    //Оставил возможность обращения к рандмной почте, на случай проверки окна авторизации
    randomEmail: () => {
      const randomString = Math.random().toString(36).substring(2, 10); 
      return `${randomString}@example.com`; 
    }
  };
  
  export const selectors = {
    emailField: 'input[type="email"].auth__input.k_form_f_email',
    passwordField: 'input[type="password"].auth__input.auth__input-icons.k_form_f_pass',
  };