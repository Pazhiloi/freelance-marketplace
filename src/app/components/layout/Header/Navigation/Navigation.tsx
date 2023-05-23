import React, { FC } from 'react';
import s from "./Navigation.module.scss";
import { navItems } from '../../../../data/data';
import NavItem from '../NavItem/NavItem';
const Navigation: FC = () => {
  return (
    <nav className={s.nav}>
      {navItems.map(({id, link, title}) => (
        <NavItem key={id} link={link} title={title}/>
      ))}
    </nav>
  );
};

export default Navigation;