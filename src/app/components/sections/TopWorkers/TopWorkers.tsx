import React, { FC } from 'react';
import s from "../../shared/ActualWorks.module.scss";
import { topWorkers } from '../../../data/data';
import TopWorker from '../../ui/TopWorker/TopWorker';
const TopWorkers: FC = () => {
  return (
    <section className={s.section}>
      <h2 className={`title ${s.title}`}>Топ фрілансерів</h2>
      <div className={s.items}>
        {topWorkers.map(
          ({
            id,
            img,
            name,
            profession,
            projectsCompleted,
            rating,
            online,
          }) => (
            <TopWorker
              key={id}
              img={img}
              name={name}
              profession={profession}
              projectsCompleted={projectsCompleted}
              rating={rating}
              online={online}
            />
          )
        )}

        <div className={s.lastItem}>Всі топові Фрілансери</div>
      </div>
    </section>
  );
};

export default TopWorkers;