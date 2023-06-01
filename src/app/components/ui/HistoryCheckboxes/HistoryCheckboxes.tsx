import React, { FC, useState } from 'react';
import s from "./HistoryCheckboxes.module.scss";
import HistoryCheckbox from './HistoryCheckbox';
const HistoryCheckboxes: FC = () => {
  const [checkboxes, setCheckboxes] = useState([
    {
    id: 1,
    title: 'Виконується',
    checked: false
  },
    {
    id: 2,
    title: 'Завершено',
    checked: false
  },
])

const handleClick = (id: number) => {
  setCheckboxes((prevCheckboxes) => {
    const updatedCheckboxes = prevCheckboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    const allChecked = updatedCheckboxes.every((checkbox) => checkbox.checked);
    return allChecked
      ? updatedCheckboxes.map((checkbox) => ({ ...checkbox, checked: false }))
      : updatedCheckboxes;
  });
}

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