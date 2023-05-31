import React, { FC } from 'react';
import s from "./Offer.module.scss";
import Button from '../Button/Button';
interface IOffer {
  id: number;
  name: string;
  rating: number;
  img: string;
  text: string;
  price: number;
  improvements: number;
  workTerm: number;
}
const Offer: FC<IOffer> = ({
  id,
  name,
  rating,
  img,
  text,
  price,
  improvements,
  workTerm,
}) => {
  return <div className={s.item}>
    <div className={s.top}>
      <div className={s.userWrapper}>
        <img src={img} alt={name} className={s.img} />
       <div className={s.nameWrapper}>
        <div className={s.name}>{name}</div>
        <div className={s.rating}>{rating}</div>
       </div>
      </div>
      <div className={s.priceWrapper}>
        <div className={s.price}>{price} ГРН</div>
        <div className={s.workTerm}>{workTerm} дня</div>
      </div>
    </div>
    <div className={s.improvements}>Кількість допрацювань: {improvements}</div>
    <p className={s.text}>{text}</p>
    <div className={s.buttons}>
      <Button className={`${s.button} ${s.choose}`}>
        Вибрати
      </Button>
      <Button className={`${s.button} ${s.reject}`}>
        Відхилити
      </Button>
    </div>
  </div>;
};

export default Offer;