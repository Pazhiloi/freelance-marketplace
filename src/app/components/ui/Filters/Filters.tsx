import React, { FC } from 'react';
import s from "./Filters.module.scss";
import { useHistoryWorks } from '../../sections/HistoryWorks/useHistoryWorks';
const Filters: FC = () => {
  
const {isHistory} = useHistoryWorks()
  
  const renderInputs = () => {
    if (isHistory) {
      return ''
    } else if(!isHistory){
      <div className={s.inputs}>
        <input placeholder=" Мінімальна ціна" type="text" className={s.input} />
        <span>—</span>
        <input
          placeholder=" Максимальна ціна"
          type="text"
          className={s.input}
        />
      </div>;
    }
  }
  
  return (
    <div className={s.wrapper}>
      {renderInputs()}
      <select className={s.select}>
        <option value="" className={s.option}>
          По зростанню ціни
        </option>
        <option value="" className={s.option}>
          По спаданню ціни
        </option>
      </select>
    </div>
  );
};

export default Filters;