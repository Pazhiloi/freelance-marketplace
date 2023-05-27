import React, { FC } from 'react';
import s from "./LoginButtons.module.scss";
import Button from '../../../ui/Button/Button';
import MenuButton from '../../../ui/MenuButton/MenuButton';
import UserPanel from '../UserPanel/UserPanel';
const LoginButtons: FC = () => {
  const auth = false;

  if (auth) {
    return (
      <div className={s.wrapper}>
        <MenuButton/>
        <UserPanel/>
      </div>
    )
  }
  return (
    <div className={s.wrapper}>
      <MenuButton/>
      <Button className={`fw-600 color-green bg-gray w-170 h-40 ${s.login}`}>
        Реєстрація
      </Button>
      <Button className={`fw-600 color-white bg-green w-120 h-40 ${s.login}`}>
        Увійти
      </Button>
    </div>
  );
};

export default LoginButtons;