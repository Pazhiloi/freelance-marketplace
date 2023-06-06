import React, { FC } from 'react';
import s from "./CreateOrder.module.scss";
import f from "../../shared/Form.module.scss";
import UploadFile from '../../ui/UploadFile/UploadFile';
import Section from '../../ui/Section/Section';
const CreateOrder: FC = () => {
  return (
    <Section>
      <form className={s.form}>
        <div className={`${s.title} title`}>Опублікуйте ваше замовлення</div>
        <div className={f.item}>
          <label className={f.label}>Назва</label>
          <input placeholder="placeholder" type="text" className={f.input} />
        </div>
        <div className={f.item}>
          <label className={f.label}>Опис</label>
          <textarea
            placeholder="Коротко опишіть свій ворк"
            className={f.textarea}
          ></textarea>
        </div>
        <div className={f.selects}>
          <div className={f.select}>
            <div className={f.label}>Категорія</div>
            <select>
              <option className={f.option} value="aboba">
                aboba
              </option>
              <option value="bob">bob</option>
            </select>
          </div>
          <div className={f.select}>
            <div className={f.label}>Підкатегорія</div>
            <select>
              <option className={f.option} value="aboba">
                aboba
              </option>
              <option value="bob">bob</option>
            </select>
          </div>
        </div>
        <div className={f.item}>
          <label className={f.label}>Термін виконання роботи у днях</label>
          <input type="text" className={f.input} />
        </div>
        <div className={f.item}>
          <label className={f.label}>Бюджет у гривнях</label>
          <input type="text" className={f.input} />
        </div>
        <div className={f.uploadFile}>
          <UploadFile/>
        </div>
        <div className={f.buttons}>
          <button type="button" className={`${f.button} ${f.back}`}>
            Назад
          </button>
          <button type="button" className={`${f.button}`}>
            Опублікувати
          </button>
        </div>
      </form>
    </Section>
  );
};

export default CreateOrder;