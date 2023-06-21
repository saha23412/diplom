import RouteNames from '../global-types/routes-name';

// Login
export const inputsLogin = [
  { name: 'email', label: 'Почта' },
  { name: 'password', label: 'Пароль' },
];
export const formTitleLogin = 'Войдите в личный кабинет';
export const pathTitleLogin = 'Еще нет личного кабинета ? Зарегистрироваться';
export const notificationLogin =
  'Проверьте заполненные данные или создайте нового пользователя';
// Home
export const greeting = 'Добро пожаловать в учёт IT колледжа';
// Signup
export const formTitleSignup = 'Зарегистрируйтесь';
export const pathTitleSignup = 'У вас уже есть личный кабинет? Войти';
export const inputsSignup = [
  { name: 'name', label: 'Имя' },
  { name: 'last_name', label: 'Фамилия' },
  { name: 'email', label: 'Почта' },
  { name: 'password', label: 'Пароль' },
];
export const notificationSignup =
  'Проверьте все данные, пароль должен быть длинее 6 символов, фамилия и имя написаны на кириллице';
// Navigation element
export const NavigationItem = [
  { title: 'Инвентарь', path: RouteNames.STORAGE },
  { title: 'Настройки', path: RouteNames.SETTINGS },
];
// User Panel form add Storage
export const inputsFormUserPanel = [
  { name: 'title', label: 'Название' },
  { name: 'amount', label: 'Количество' },
  { name: 'description', label: 'Описание' },
  { name: 'inventory_number', label: 'Номер инвентаря' },
];

export const selectOptions = [
  { name: 'Каширская', value: 'Каширская' },
  { name: 'Коломенская', value: 'Коломенская' },
];
