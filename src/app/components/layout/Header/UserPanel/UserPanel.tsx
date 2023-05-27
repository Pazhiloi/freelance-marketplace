import React, { FC } from 'react';
import s from './UserPanel.module.scss'
import {notification, topChat, topStar } from '../../../../data/data';
import UserMenu from './UserMenu';
const UserPanel:FC = () => {
  return (
    <div className={s.container}>
    <div className={s.wrapper}>
      <div className={s.imgItem}>
        <img src={topStar} alt="star" className={s.img} />
      </div>
      <div className={s.imgItem}>
        <img src={notification} alt="notification icon" className={s.img} />
      </div>
      <div className={s.imgItem}>
        <img src={topChat} alt="chat icon" className={s.img} />
      </div>
    </div>
      <UserMenu/>
    </div>
  );
};

export default UserPanel;