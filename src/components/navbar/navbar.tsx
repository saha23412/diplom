import React from 'react';
import { NavbarProps } from './navbar-types';
import LinkCustom from '../ui/link/link';
import style from './navbar.module.css';
import ContainerBorder from '../../containers/container-border/container-border';

const Navbar: React.FC<NavbarProps> = ({ navigationItem, className }) => {
  return (
    <ContainerBorder>
      <div className={`${style.navbar} ${className}`}>
        {navigationItem.map((item) => (
          <div className={style['navbar-element']} key={item.path}>
            <LinkCustom path={item.path} className={style.link}>
              {item.title}
            </LinkCustom>
          </div>
        ))}
      </div>
    </ContainerBorder>
  );
};

export default Navbar;
