import React, { FC } from 'react';
import s from "./Job.module.scss";
interface IJob {
  title: string;
  price: number;
  name: string;
  img: string;
  projects: number;
  rating: number;
  reviews: number;
  uploaded: string;
  offers: number;
}
const Job: FC<IJob> = ({
  title,
  price,
  name,
  img,
  projects,
  rating,
  reviews,
  uploaded,
  offers,
}) => {
  return (
    <div className={s.item}>
      <div className={s.left}>
        <div className={s.title}>{title}</div>
        <div className={s.userWrapper}>
          <img src={img} alt={name} className={s.img} />
          <div className={s.info}>
            <div className={s.name}>{name}</div>
            <div className={s.projects}>Розміщено проектів :{projects}</div>
            <div className={s.ratingWrapper}>
              <div className={s.rating}>{rating}</div>
              <div className={s.reviews}>{reviews} відгуків</div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.priceWrapper}>
          <div className={s.price}>Бюджет: {price} гривень</div>
          <div className={s.uploaded}>{uploaded}</div>
        </div>
        <div className={s.offers}>
         Пропозицій:{offers}
        </div>
      </div>
    </div>
  );
};

export default Job;