import React, { FC } from 'react';
import s from "./HistoryWorks.module.scss";
import w from "../../shared/WorkItems.module.scss";
import t from "../../shared/WorksTop.module.scss";
import Filters from '../../ui/Filters/Filters';
import Work from '../../ui/Work/Work';
import { myWorks } from '../../../data/works';
import LoadMore from '../../ui/LoadMore/LoadMore';
import { useHistoryWorks } from './useHistoryWorks';
import HistoryCheckboxes from '../../ui/HistoryCheckboxes/HistoryCheckboxes';
const HistoryWorks: FC = () => {
const {isHistory} = useHistoryWorks()
  const renderCheckboxes = () => {
    if (isHistory) {
      return <div className={s.center}>
        <HistoryCheckboxes/>
      </div>
    }else{
      return ''
    }
  }
  
  return (
    <section className={s.section}>
      <h1 className={`${s.title} main-title`}>
        Історія <span>покупок</span>
      </h1>

      <div className={t.top}>
        <div className={t.left}>Всього 65 угод</div>
        {renderCheckboxes()}
        <div className={t.right}>
          <Filters />
        </div>
      </div>

      <div className={w.items}>
        {myWorks.map(
          ({
            id,
            title,
            price,
            img,
            userImg,
            name,
            rating,
            projects,
            plan,
            date,
            status,
          }) => (
            <Work
              isHistory={isHistory}
              key={id}
              id={id}
              title={title}
              price={price}
              img={img}
              userImg={userImg}
              name={name}
              rating={rating}
              projects={projects}
              plan={plan}
              date={date}
              status={status}
            />
          )
        )}
      </div>
      <LoadMore />
    </section>
  );
};

export default HistoryWorks;