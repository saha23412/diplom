import { RouteProps } from './router-types';
import Main from '../pages/main/main';
import Signup from '../pages/signup/signup';
import Login from '../pages/login/login';
import Home from '../pages/home/home';
import RouteNames from '../global-types/routes-name';
import MyInventory from '../pages/my-inventory/my-inventory';
import Profile from '../pages/profile/profile';
import Settings from '../pages/settings/settings';
import InventoryStorage from '../pages/inventory-storage/inventory-storage';

export const publicRoutes: RouteProps[] = [
  { path: RouteNames.MAIN, element: Main },
  { path: RouteNames.LOGIN, element: Login },
  { path: RouteNames.SIGNUP, element: Signup },
];
export const privateRoutes: RouteProps[] = [
  { path: RouteNames.HOME, element: Home },
  { path: RouteNames.PRIVATE_STORAGE, element: MyInventory },
  { path: RouteNames.PROFILE, element: Profile },
  { path: RouteNames.SETTINGS, element: Settings },
  { path: RouteNames.STORAGE, element: InventoryStorage },
];
