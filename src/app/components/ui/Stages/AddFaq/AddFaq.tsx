import React, { FC } from 'react';
import f from '../../../shared/Form.module.scss'
import s from "./AddFaq.module.scss";
import Button from '../../Button/Button';
const AddFaq: FC = () => {
  return (
    <div className={s.option}>
      <div className={s.title}>Поширені запитання</div>

      <div className={f.item}>
        <label className={f.label}>Питання</label>
        <input placeholder="Placeholder" type="text" className={f.input} />
      </div>
      <div className={f.item}>
        <label className={f.label}>Відповідь</label>
        <input placeholder="Placeholder" type="text" className={f.input} />
      </div>
      
      <div className={s.buttonWrapper}>
        <Button className={s.button}>Видалити</Button>
      </div>
    </div>
  );
};

export default AddFaq;