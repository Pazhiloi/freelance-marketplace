import React, { FC } from 'react';
import s from "./OrderDescription.module.scss";
import { tags } from '../../../data/data';
import OrderTag from '../OrderTag/OrderTag';
import { orderDocuments } from '../../../data/works';
const OrderDescription: FC = () => {
  return (
    <div className={s.description}>
      <div className={s.top}>
        <h2 className={`${s.title} title`}>
          Нужно сделать Дизайн сайта по тематике авто
        </h2>
        <div className={s.priceWrapper}>
          <div className={s.price}>50000 гривень</div>
          <div className={s.deadline}>до 14.07.2021</div>
        </div>
      </div>
      <div className={s.tags}>
        {tags.map(({ id, title }) => (
          <OrderTag key={id} id={id} title={title} />
        ))}
      </div>
      <p className={s.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
        aliquet felis ullamcorper duis faucibus sapien tincidunt tristique elit.
        Facilisi feugiat neque, morbi quis. Justo non mauris velit amet,
        habitasse. Enim, euismod purus semper urna. Lorem adipiscing tristique
        dignissim mattis. Consectetur morbi nisl, at sodales nunc egestas dolor
        aliquet amet. Massa ipsum laoreet ipsum proin maecenas. Magnis pulvinar
        consequat donec ipsum id pulvinar nam sed. Ut tempor turpis vehicula
        nulla non.
      </p>
      <div className={s.documents}>
        {orderDocuments.map(({id, img, title}) => (
          <div key={id} className={s.document}>
            <img src={img} alt={title} className={s.img} />
            <div className={s.name}>
              {title}
            </div>
          </div>
        ))}
      </div>
      <div className={s.offers}>
        Пропозицій: 7
      </div>
    </div>
  );
};

export default OrderDescription;