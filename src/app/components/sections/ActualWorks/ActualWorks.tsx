import React, { FC } from 'react';
import s from "../../shared/ActualWorks.module.scss";
import { actualWorks } from '../../../data/data';
import ActualWork from '../../ui/ActualWork/ActualWork';
import Section from '../../ui/Section/Section';
const ActualWorks: FC = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default ActualWorks;