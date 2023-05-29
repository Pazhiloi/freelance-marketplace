import React, { FC } from 'react';
import s from "./Filters.module.scss";
const Filters: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.inputs}>
        <input placeholder=' Мінімальна ціна' type="text" className={s.input} />
        <span>—</span>
        <input placeholder=' Максимальна ціна' type="text" className={s.input} />
      </div>
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