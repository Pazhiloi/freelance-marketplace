import React, { FC } from 'react';
import s from "./Input.module.scss";
const Input: FC = () => {
  return (
    <input type="text" className={s.input} placeholder='Пошук' />
  );
};

export default Input;