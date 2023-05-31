import { RouteProps } from '../../router/router-types';

export interface AppRouterProps {
  routerPublick: RouteProps[];
  routerPrivate: RouteProps[];
  auth: boolean;
}
