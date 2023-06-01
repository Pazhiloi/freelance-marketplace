import React, { FC } from 'react';
import s from "./HistoryCheckboxes.module.scss";
interface IHistoryCheckbox {
  id: number;
  title: string;
  checked: boolean;
  handleClick: any;
} 
const HistoryCheckbox: FC<IHistoryCheckbox> = ({ id, title, checked , handleClick}) => {
  return (
    <div onClick={() => handleClick(id)} key={id} className={s.item}>
      <div 
        className={checked ? `${s.checkbox} ${s.checked}` : `${s.checkbox}`}
      ></div>
      <span className={s.status}>{title}</span>
    </div>
  );
};

export default HistoryCheckbox;