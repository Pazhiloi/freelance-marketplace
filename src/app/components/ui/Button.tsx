import React, { FC, ReactNode } from 'react';
import s from "./Button.module.scss";
interface IButton{
  children: ReactNode;
  className?: string;
}
const Button: FC<IButton> = ({children, className}) => {
  return (
    <button className={`${s.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;