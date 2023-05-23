import React, { FC } from 'react';
import s from "./NavItem.module.scss";
import { Link } from 'react-router-dom';

interface INav{
  link: string;
  title: string;
}
const NavItem: FC<INav> = ({link, title}) => {
  return (
    <Link to={link} className={s.item} >
      {title}
    </Link>
  );
};

export default NavItem;