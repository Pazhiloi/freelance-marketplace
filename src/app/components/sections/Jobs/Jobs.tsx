import React, { FC } from 'react';
import s from'./Jobs.module.scss'
import t from'../../shared/WorksTop.module.scss'
import Filters from '../../ui/Filters/Filters';
import { works } from '../../../data/data';
import Job from '../../ui/Job/Job';
import LoadMore from '../../ui/LoadMore/LoadMore';
import Section from '../../ui/Section/Section';
const Jobs: FC = () => {
  return (
    <Section>
      <div className={t.top}>
        <div className={t.left}>65 проектів по дизайну</div>
        <div className={t.right}>
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
    </Section>
  );
};

export default Jobs;