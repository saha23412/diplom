import { login, required_field } from './rules';
import { ErrorRules } from './validation-types';
export const ErorrRules: ErrorRules = {
  email: {
    required: required_field,
    validate: (value: string) => {
      if (!login.test(value)) {
        return 'Неверный формат логина';
      }
      return true;
    },
  },
  password: {
    required: false,
    validate: (value: string) => {
      if (value.length < 6) {
        return 'Пароль должен быть длинее 6-ти символов';
      }
      return true;
    },
  },
  name: {
    required: required_field,
    validate: (value: string) => {
      if (/[0-9]/.test(value)) {
        return 'Имя должно быть без чисел';
      }
      if (value.length === 1) {
        return 'Имя должно быть длинее 1 символова';
      }
      return true;
    },
  },
  last_name: {
    required: required_field,
    validate: (value: string) => {
      if (/[0-9]/.test(value)) {
        return 'Фамилия должна быть без чисел';
      }
      if (value.length === 1) {
        return 'Фамилия должна быть длинее 1 символова';
      }
      return true;
    },
  },
};
