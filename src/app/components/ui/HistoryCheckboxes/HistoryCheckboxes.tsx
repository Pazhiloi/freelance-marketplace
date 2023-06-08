import React, { FC, useState } from 'react';
import s from "./HistoryCheckboxes.module.scss";
import HistoryCheckbox from './HistoryCheckbox';
import { useHistoryCheckboxes } from './useHistoryCheckboxes';
const HistoryCheckboxes: FC = () => {
  const { handleClick, checkboxes } = useHistoryCheckboxes()

  return (
    <div className={s.wrapper}>
      <div className={s.text}>Показати тільки:</div>
      <div className={s.items}>
        {checkboxes.map(({ id, title, checked }) => (
          <HistoryCheckbox handleClick={handleClick} key={id} id={id} title={title} checked={checked}/>
        ))}
      </div>
    </div>
  );
};

export default HistoryCheckboxes;