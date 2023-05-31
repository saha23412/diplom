const email = /[a-zA-Z](.[a-zA-Z0-9_-]*)$/;
const password = /[0-9a-zA-Zа-яА-Я]{6}/;
const name = /[А-Яа-я]/;

// Login form validation

export const LoginRulesForm = {
  email,
  password,
};

// Signup form validation

export const SignupRulesForm = {
  name,
  last_name: name,
  email,
  password,
};
