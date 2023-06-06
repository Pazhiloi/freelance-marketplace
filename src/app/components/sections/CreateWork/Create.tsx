import React, { FC } from 'react';
import s from "./Create.module.scss";
import f from "../../shared/Form.module.scss";
import First from '../../ui/Stages/First';
import Second from '../../ui/Stages/Second';
import Third from '../../ui/Stages/Third';
import Section from '../../ui/Section/Section';
const Create: FC = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default Create;