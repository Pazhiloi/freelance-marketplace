import React, { FC } from 'react';
import s from "./Plan.module.scss";
import Accordion from '../Accordion/Accordion';
import Additional from './Additional/Additional';
import Button from '../Button/Button';
export interface IOption {
  id: number;
  title: string;
  text: string;
  term: number;
  price: number;
}
interface IPlan {
  id: number;
  title: string;
  desc: string;
  price: number;
  term: number;
  revisions: number;
  bottomTitle: string;
  options: IOption[];
}
const Plan: FC<IPlan> = ({id,
title,
desc,
price,
term,
revisions,
bottomTitle,
options}) => {
  
  return <div className={s.plan}>
    <p className={s.desc}>
      {desc}
    </p>
    <div className={s.priceWrapper}>
      <div className={s.price}>{price} ГРН</div>
      <div className={s.term}>Зроблю за {term} днів</div>
    </div>
    <div className={s.revisions}>Кількість допрацювань: {revisions}</div> 

    <div className={s.bottomTitle}>{bottomTitle}</div>

    {options.map(option => (
      <Accordion key={option.id} title={option.title} content={<Additional {...option}/>}/>
    ))}
    <Button className={s.button}>
      Придбати за {price} гривень
    </Button>
  </div>;
};

export default Plan;