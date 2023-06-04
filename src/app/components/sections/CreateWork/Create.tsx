import React, { FC } from 'react';
import s from "./Create.module.scss";
import f from "../../shared/Form.module.scss";
import First from '../../ui/Stages/First';
import Second from '../../ui/Stages/Second';
import Third from '../../ui/Stages/Third';
const Create: FC = () => {
  return (
    <section className={s.section}>
      <form className={s.form}>
        {/* <First/> */}
        {/* <Second/> */}
        <Third/>
        <div className={f.buttons}>
          <button type="button" className={`${f.button} ${f.back}`}>
            Назад
          </button>
          <button type="button" className={`${f.button}`}>
            Далі
          </button>
        </div>
      </form>
    </section>
  );
};

export default Create;