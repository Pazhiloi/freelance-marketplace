import React, { FC } from 'react';
import s from "../../shared/ActualWorks.module.scss";
import { actualWorks } from '../../../data/data';
import ActualWork from '../../ui/ActualWork/ActualWork';
const ActualWorks: FC = () => {
  return (
    <section className={s.section}>
      <h2 className={`title ${s.title}`}>Актуальні ворки</h2>
      <div className={s.items}>
        {actualWorks.map(({ id, img, title, description }) => (
          <ActualWork
            key={id}
            img={img}
            title={title}
            description={description}
          />
        ))}
        <div className={s.lastItem}>
          Дивитись всі ворки
        </div>
      </div>
    </section>
  );
};

export default ActualWorks;