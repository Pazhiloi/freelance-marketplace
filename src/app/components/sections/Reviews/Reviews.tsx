import React, { FC, useState } from 'react';
import s from "./Reviews.module.scss";
import { myReviews } from '../../../data/works';
import Review from '../../ui/Review/Review';
import LoadMore from '../../ui/LoadMore/LoadMore';
const Reviews: FC = () => {
  const [isChecked, setIsChecked] = useState('pos');
  return (
    <section className={s.section}>
      <h2 className={`title ${s.title}`}>Відгуки</h2>
      <div className={s.tabs}>
        <div
          className={isChecked === "pos" ? `${s.tab} ${s.green}` : `${s.tab}`}
        >
          Позитивні
        </div>
        <div
          className={isChecked === "neg" ? `${s.tab} ${s.green}` : `${s.tab}`}
        >
          Негативні
        </div>
      </div>
      <div className={s.items}>
        {myReviews.map(({ id, name, rating, img, text }) => (
          <Review key={id} name={name} rating={rating} img={img} text={text} />
        ))}
      </div>
      <LoadMore/>
    </section>
  );
};

export default Reviews;