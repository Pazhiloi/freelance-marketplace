import React, { FC, useState } from 'react';
import s from "./Reviews.module.scss";
import b from "../../shared/LoadMoreButton.module.scss";
import Button from '../../ui/Button/Button';
import { myReviews } from '../../../data/works';
import Review from '../../ui/Review/Review';
const Reviews: FC = () => {
  const [isChecked, setIsChecked] = useState('pos');
  return (
    <div className={s.section}>
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
      <div className={b.loadMore}>
        <Button className={b.button}>Завантажити більше</Button>
      </div>
    </div>
  );
};

export default Reviews;