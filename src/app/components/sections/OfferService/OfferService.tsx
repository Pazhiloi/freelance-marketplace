import React, { FC } from 'react';
import s from "./OfferService.module.scss";
const OfferService: FC = () => {
  return (
    <div className={s.section}>
      <h2 className={`title ${s.sectionTitle}`}>Предложить услугу</h2>
      <form className={s.form}>
        <div className={s.item}>
          <label className={s.label}>Стоимость</label>
          <input placeholder="Placeholder" type="text" className={s.input} />
        </div>
        <div className={s.item}>
          <label className={s.label}>Сроки в днях</label>
          <input placeholder="Placeholder" type="text" className={s.input} />
        </div>
        <div className={s.item}>
          <label className={s.label}>Количество доработок</label>
          <input placeholder="Placeholder" type="text" className={s.input} />
        </div>
        <div className={s.item}>
          <label className={s.label}>Количество доработок</label>
          <textarea
            placeholder="Кратко опишите свой ворк"
            name=""
            id=""
            cols={30}
            rows={10}
            className={s.textarea}
          ></textarea>
        </div>
        <div className={s.buttonWrapper}>
          <button type="button" className={s.button}>
            Предложить услугу
          </button>
        </div>
      </form>
    </div>
  );
};

export default OfferService;