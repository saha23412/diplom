import { RouteProps } from './router-types';
import Main from '../pages/main/main';
import Signup from '../pages/signup/signup';
import Login from '../pages/login/login';

export enum RouteNames {
  MAIN = '/',
  LOGIN = '/login',
  SIGNUP = '/signup',
}
export const publicRoutes: RouteProps[] = [
  { path: RouteNames.MAIN, element: Main },
  { path: RouteNames.LOGIN, element: Login },
  { path: RouteNames.SIGNUP, element: Signup },
];
export const privateRoutes: RouteProps[] = [];
