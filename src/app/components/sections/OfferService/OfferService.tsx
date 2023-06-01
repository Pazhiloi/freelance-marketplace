import React, { FC } from 'react';
import s from "./OfferService.module.scss";
import f from "../../shared/Form.module.scss";
const OfferService: FC = () => {
  return (
    <section className={s.section}>
      <h2 className={`title ${s.sectionTitle}`}>Предложить услугу</h2>
      <form className={s.form}>
        <div className={f.item}>
          <label className={f.label}>Стоимость</label>
          <input placeholder="Placeholder" type="text" className={f.input} />
        </div>
        <div className={f.item}>
          <label className={f.label}>Сроки в днях</label>
          <input placeholder="Placeholder" type="text" className={f.input} />
        </div>
        <div className={f.item}>
          <label className={f.label}>Количество доработок</label>
          <input placeholder="Placeholder" type="text" className={f.input} />
        </div>
        <div className={f.item}>
          <label className={f.label}>Количество доработок</label>
          <textarea
            placeholder="Кратко опишите свой ворк"
            name=""
            id=""
            cols={30}
            rows={10}
            className={f.textarea}
          ></textarea>
        </div>
        <div className={f.buttonWrapper}>
          <button type="button" className={f.button}>
            Предложить услугу
          </button>
        </div>
      </form>
    </section>
  );
};

export default OfferService;