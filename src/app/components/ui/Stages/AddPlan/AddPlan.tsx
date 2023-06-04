import React, { FC } from 'react';
import s from "./AddPlan.module.scss";
import f from "../../../shared/Form.module.scss";
import Button from '../../Button/Button';
interface IAddPlan {
  title: string;
}
const AddPlan: FC<IAddPlan> = ({title}) => {
  return (
    <div className={s.plan}>
      <div className={s.title}>{title}</div>
      <div className={f.item}>
        <label className={f.label}>Опис пакету</label>
        <textarea placeholder="Placeholder" className={s.textarea}></textarea>
      </div>
      <div className={f.item}>
        <label className={f.label}>Термін виконання</label>
        <input placeholder="Placeholder" type="text" className={f.input} />
      </div>
      <div className={f.item}>
        <label className={f.label}>Кількість допрацювань</label>
        <input placeholder="Placeholder" type="text" className={f.input} />
      </div>
      <div className={f.item}>
        <label className={f.label}>Вартість в гривнях</label>
        <input placeholder="Placeholder" type="text" className={f.input} />
      </div>
      <div className={s.buttonWrapper}>
        <Button className={s.button}>Додати опцію</Button>
      </div>
    </div>
  );
};

export default AddPlan;