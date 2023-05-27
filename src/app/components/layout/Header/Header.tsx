import React, { FC } from "react";
import Logo from "./Logo/Logo";
import s from "./Header.module.scss";
import Navigation from "./Navigation/Navigation";
import LoginButtons from "./LoginButtons/LoginButtons";
import { useSticky } from "../../../hooks/useSticky";
const Header: FC = () => {
  const {isSticky} = useSticky()
  return (
    <header className={s.header}>
      <div className="container">
        <div className={isSticky? `${s.inner} ${s.fixed}` : `${s.inner}`}>
          <div className={s.left}>
            <Logo />
            <Navigation />
          </div>
          <LoginButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
