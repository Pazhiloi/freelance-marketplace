import React, { FC } from 'react';
import s from "./LoginButtons.module.scss";
import Button from '../../../ui/Button';
const LoginButtons: FC = () => {
  return (
    <div className={s.wrapper}>
      <Button className='fw-600 color-green bg-gray w-170 h-40'>
        Реєстрація
      </Button>
      <Button className='fw-600 color-white bg-green w-120 h-40'>
        Увійти
      </Button>
    </div>
  );
};

export default LoginButtons;