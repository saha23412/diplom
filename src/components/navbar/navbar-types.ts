import RouteNames from '../../global-types/routes-name';

interface NavigationELement {
  title: string;
  path: RouteNames;
}
export interface NavbarProps {
  navigationItem: NavigationELement[];
  className?: string;
}
