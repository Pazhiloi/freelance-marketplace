import React, { FC } from 'react';
import s from "./FreelanceServices.module.scss";
import SearchField from '../../ui/SearchField/SearchField';
import Rubrics from '../../ui/Rubrics/Rubrics';
import { introduce } from '../../../data/data';
const FreelanceServices: FC = () => {
  return (
    <section className={s.section}>
        <div className={s.wrapper}>
          <div className={s.left}>
            <h1 className={`main-title ${s.title}`}>
              Придбайте послуги фрілансу в{" "}
              <span className="color-green">два кліка</span>
            </h1>
            <div className={`${s.subtitle} fz-20`}>
              Ворк — одиниця роботи продавця, яку можна придбати як товар в
              магазині
            </div>
            <div className={s.field}>
            <SearchField />
            </div>
            <div className={s.rubricsWrapper}>
              <div className={s.rubricsTitle}>
                Виберіть рубрику, щоб розпочати
              </div>
              <div className={s.rubricsInner}>
              <Rubrics/>
              </div>
            </div>
          </div>
          <div className={s.right}>
            <img src={introduce} alt="introduce img" className={s.img} />
          </div>
        </div>
    </section>
  );
};

export default FreelanceServices;