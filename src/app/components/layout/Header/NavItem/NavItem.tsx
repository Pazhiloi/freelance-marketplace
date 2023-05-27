import React, { FC } from 'react';
import s from "./NavItem.module.scss";
import { Link } from 'react-router-dom';
import { useUI } from '../../../../hooks/useSelectors';

interface INav{
  link: string;
  title: string;
}
const NavItem: FC<INav> = ({link, title}) => {
  const { menuActive } = useUI();
  return (
    <Link to={link} className={menuActive? `${s.item} ${s.active}` : `${s.item}`} >
      {title}
    </Link>
  );
};

export default NavItem;