interface NavigationELement {
  title: string;
  path: string;
}
export interface NavbarProps {
  navigationItem: NavigationELement[];
  className?: string;
}
