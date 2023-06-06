import React, { FC } from 'react';
import s from "./MyOrders.module.scss";
import { works } from '../../../data/works';
import MyOrder from '../../ui/MyOrder/MyOrder';
import Section from '../../ui/Section/Section';
const MyOrders: FC = () => {
  return (
    <Section>
      <h1 className={`${s.title} maxin-title`}>
        Мої <span>замовлення</span>
      </h1>

      <div className={s.top}>
        <div className={`${s.topTitle} title`}>Всього 10 заявок</div>
        <select className={s.select}>
          <option value="" className={s.option}>
            По зростанню ціни
          </option>
          <option value="" className={s.option}>
            По спаданню ціни
          </option>
        </select>
      </div>

      <div className={s.items}>
        {works.map(({ id, title, price, uploaded, offers, status, text }) => (
          <MyOrder
            key={id}
            title={title}
            price={price}
            uploaded={uploaded}
            offers={offers}
            status={status}
            text={text}
          />
        ))}
      </div>
    </Section>
  );
};

export default MyOrders;