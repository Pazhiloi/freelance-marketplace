import React, { FC } from 'react';
import s from './User.module.scss'
import { user6 } from '../../../data/usersImages';
const User: FC = () => {
  return (
    <div className={s.customerWrapper}>
      <img src={user6} alt="customer avatar" className={s.img} />
      <div className={s.nameWrapper}>
        <div className={s.name}>Екатерина Иванова</div>
        <div className={s.projects}>Розміщено проектів на біржі: 25</div>
        <div className={s.ratingWrapper}>
          <div className={s.rating}>4</div>
          <div className={s.reviews}>15 відгуків</div>
        </div>
      </div>
    </div>
  );
};

export default User;