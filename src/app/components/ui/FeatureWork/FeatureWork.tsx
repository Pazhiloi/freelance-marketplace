import React, { FC } from 'react';
import s from'./FeatureWork.module.scss'
import FeatureStar from '../FeatureStar/FeatureStar';

interface IFeatureWork {
  id: number;
  title: string;
  price: number;
  img: string;
  userImg: string;
  name: string;
  rating: number;
  projects: number;
}
const FeatureWork: FC<IFeatureWork> = ({
  id,
  title,
  price,
  img,
  userImg,
  name,
  rating,
  projects,
}) => {
  return (
    <div className={s.item}>
      <div className={s.top}>
        <img src={img} alt="item img" className={s.img} />
        <div className={s.star}>
        <FeatureStar/>
        </div>
      </div>
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <div className={s.price}>{price} гривень</div>

        <div className={s.userWrapper}>
          <img src={userImg} alt="user avatar" className={s.userImg} />
          <div className={s.nameWrapper}>
            <div className={s.name}>{name}</div>
            <div className={s.projects}>Виконано проектів: {projects}</div>
          </div>
        </div>
        <div className={s.rating}>{rating}</div>
      </div>
    </div>
  );
};

export default FeatureWork;