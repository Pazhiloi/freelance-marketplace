import React, { FC } from 'react';
import s from "./NavItem.module.scss";
import { Link } from 'react-router-dom';
import { useUI } from '../../../../hooks/useSelectors';
import { useActions } from '../../../../hooks/useActions';
import { INav } from './nav-item.interface';
const NavItem: FC<INav> = ({link, title}) => {
  const { menuActive } = useUI();
  const { setMenu } = useActions();
  const autoCloseMenu = () => {
    if (menuActive) {
      setMenu();
    }
  }
  const itemClassName = menuActive ? `${s.item} ${s.active}` : `${s.item}`;

  
  return (
    <Link onClick={autoCloseMenu} to={link} className={itemClassName}>
      {title}
    </Link>
  );
};

export default NavItem;