import React from 'react';
import s from "./MenuButton.module.scss";
import { menu } from '../../../data/data';
import { useActions } from '../../../hooks/useActions';
const MenuButton = () => {
  const {setMenu} = useActions()
  const handleClick = () => {
    setMenu()
  }
  
  return (
    <button className={s.button} onClick={handleClick}>
      <img src={menu} alt="menu icon" />
    </button>
  );
};

export default MenuButton;