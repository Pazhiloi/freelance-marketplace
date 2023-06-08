import React, { FC } from 'react';
import s from "./HistoryCheckboxes.module.scss";
import { IHistoryCheckbox } from './checkboxes.interface';

const HistoryCheckbox: FC<IHistoryCheckbox> = ({ id, title, checked , handleClick}) => {

  const checkboxClassName = checked
    ? `${s.checkbox} ${s.checked}`
    : `${s.checkbox}`;
  return (
    <div onClick={() => handleClick(id)} key={id} className={s.item}>
      <div 
        className={checkboxClassName}
      ></div>
      <span className={s.status}>{title}</span>
    </div>
  );
};

export default HistoryCheckbox;