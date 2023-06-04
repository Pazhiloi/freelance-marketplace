import React, { FC } from 'react';
import s from "./AddOption.module.scss";
import f from "../../../shared/Form.module.scss";
import Button from '../../Button/Button';
const AddOption: FC = () => {
  return (
    <div className={s.option}>
      <div className={s.title}>Додаткові опції</div>
      <div className={f.item}>
        <label className={f.label}>Назва</label>
        <input placeholder="Placeholder" type="text" className={f.input} />
      </div>
      <div className={f.item}>
        <label className={f.label}>Підказка для покупця</label>
        <input placeholder="Placeholder" type="text" className={f.input} />
      </div>
      <div className={f.item}>
        <label className={f.label}>Термін виконання</label>
        <input placeholder="Placeholder" type="text" className={f.input} />
      </div>
      <div className={f.item}>
        <label className={f.label}>Ціна в гривнях</label>
        <input placeholder="Placeholder" type="text" className={f.input} />
      </div>
        <div className={s.buttonWrapper}>
          <Button className={s.button}>Видалити</Button>
        </div>
    </div>
  );
};

export default AddOption;