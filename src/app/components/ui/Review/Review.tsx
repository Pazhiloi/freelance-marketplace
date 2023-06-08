import React, { FC } from 'react';
import s from "./Review.module.scss";
import { IReview } from './review.interface';
const Review: FC<IReview> = ({ name, rating, img, text }) => {
  return <div className={s.item}>
    <div className={s.top}>
     <img src={img} alt="avatar img" className={s.img} />
     <div className={s.nameWrapper}>
      <div className={s.name}>
        {name}
      </div>
      <div className={s.rating}>{rating}</div>
     </div>
    </div>
    <p className={s.text}>
      {text}
    </p>
  </div>;
};

export default Review;