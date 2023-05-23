import React, { FC } from 'react';
import Logo from './Logo/Logo';
import s from "./Header.module.scss";
import Navigation from './Navigation/Navigation';
import LoginButtons from './LoginButtons/LoginButtons';
const Header: FC = () => {
  return (
    <header className={s.header}>
    <div className='container'>
      <div className={s.wrapper}>
      <Logo/>
      <Navigation/>
      <LoginButtons/>
      </div>
    </div>
    </header>
  );
};

export default Header;