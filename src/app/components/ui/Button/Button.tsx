import React, { FC } from 'react';
import s from "./Button.module.scss";
import { IButton } from './button.interface';

const Button: FC<IButton> = ({children, className}) => {
  return (
    <button className={`${s.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;