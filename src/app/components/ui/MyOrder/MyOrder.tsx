import React, { FC } from 'react';
import s from "./MyOrder.module.scss";
import { writeClassForStatus } from '../../../utils/classes/writeClassForStatus';
import { IMyOrder } from './my-order.interface';

const MyOrder: FC<IMyOrder> = ({ title, price, uploaded, offers, status, text }) => {
  const classStatus = writeClassForStatus(status)
  return <div className={s.item}>
    <div className={s.left}>
      <div className={s.title}>{title}</div>  
      <p className={s.text}>{text}</p> 
      <div className={`${s.status} ${classStatus}`}>{status}</div> 
    </div>
    <div className={s.right}>
      <div className={s.priceWrapper}>
        <div className={s.price}>Бюджет: {price} гривень</div>
        <div className={s.uploaded}>{uploaded}</div>
      </div>
      <div className={s.offers}>Пропозицій: {offers}</div>
    </div>
  </div>;
};

export default MyOrder;