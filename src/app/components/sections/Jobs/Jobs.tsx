import React, { FC } from 'react';
import s from'./Jobs.module.scss'
import Filters from '../../ui/Filters/Filters';
import { works } from '../../../data/data';
import Job from '../../ui/Job/Job';
import LoadMore from '../../ui/LoadMore/LoadMore';
const Jobs: FC = () => {
  return (
    <section className={s.section}>
      <div className={s.top}>
        <div className={s.left}>65 проектів по дизайну</div>
        <div className={s.right}>
          <Filters />
        </div>
      </div>

      <div className={s.jobs}>
        {works.map(
          ({
            id,
            title,
            price,
            name,
            img,
            projects,
            rating,
            reviews,
            uploaded,
            offers,
          }) => (
            <Job
              key={id}
              title={title}
              price={price}
              name={name}
              img={img}
              projects={projects}
              rating={rating}
              reviews={reviews}
              uploaded={uploaded}
              offers={offers}
            />
          )
        )}
      </div>
      <LoadMore/>
    </section>
  );
};

export default Jobs;