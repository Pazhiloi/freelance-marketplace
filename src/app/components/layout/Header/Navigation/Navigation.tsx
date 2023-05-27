import React, { FC } from "react";
import s from "./Navigation.module.scss";
import { closeIcon, navItems } from "../../../../data/data";
import NavItem from "../NavItem/NavItem";
import { useUI } from "../../../../hooks/useSelectors";
import { useActions } from "../../../../hooks/useActions";
const Navigation: FC = () => {
  const { menuActive } = useUI();
  const { setMenu } = useActions();
  const closeMenu = () => {
    setMenu();
  };
  return (
    <nav className={s.nav}>
      <div
        className={menuActive ? `${s.menuList} ${s.active}` : `${s.menuList}`}
      >
        {menuActive ? (
          <img
            onClick={closeMenu}
            src={closeIcon}
            alt="close icon"
            className={s.closeIcon}
          />
        ) : null}
        {navItems.map(({ id, link, title }) => (
          <NavItem key={id} link={link} title={title} />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
