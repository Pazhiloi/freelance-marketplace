import React, { FC } from 'react';
import s from './Works.module.scss'
import w from "../../shared/WorkItems.module.scss";
import t from "../../shared/WorksTop.module.scss";
import SearchField from '../../ui/SearchField/SearchField';
import Rubrics from '../../ui/Rubrics/Rubrics';
import Filters from '../../ui/Filters/Filters';
import Work from '../../ui/Work/Work';
import { myWorks } from '../../../data/works';
import LoadMore from '../../ui/LoadMore/LoadMore';
const Works: FC = () => {
  return (
    <section className={s.section}>
      <div className={s.field}>
        <SearchField />
      </div>
      <div className={s.rubricsInner}>
        <Rubrics />
      </div>
      <div className={t.top}>
        <div className={t.left}>65 ворків по дизайну</div>
        <div className={t.right}>
          <Filters />
        </div>
      </div>
      <div className={w.items}>
        {myWorks.map(
          ({ id, title, price, img, userImg, name, rating, projects }) => (
            <Work
              key={id}
              id={id}
              title={title}
              price={price}
              img={img}
              userImg={userImg}
              name={name}
              rating={rating}
              projects={projects}
            />
          )
        )}
      </div>
      <LoadMore/>
    </section>
  );
};

export default Works;