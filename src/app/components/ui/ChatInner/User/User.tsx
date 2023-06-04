import React, { FC } from 'react';
import s from "./User.module.scss";
import { user11 } from '../../../../data/usersImages';
const User: FC = () => {
  const isOnline = true
  return (
    <div className={s.user}>
      <img src={user11} alt="" className={s.img} />
      <div className={s.nameWrapper}>
        <div className={s.name}>Никита Евреев</div>
        <div
          className={
            isOnline ? `${s.status} ${s.online}` : `${s.status} ${s.offline}`
          }
        >
          {isOnline ? "Онлайн" : "Оффлайн"}
        </div>
      </div>
    </div>
  );
};

export default User;