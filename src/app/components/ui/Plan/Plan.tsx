import React, { FC } from 'react';
import s from "./Plan.module.scss";
import Accordion from '../Accordion/Accordion';
import Additional from './Additional/Additional';
import Button from '../Button/Button';
import { getDayString } from '../../../utils/string/getDayString';
import { IPlan } from './plan.interface';

const Plan: FC<IPlan> = ({id,
title,
desc,
price,
term,
revisions,
bottomTitle,
options}) => {

  const dayString = getDayString(term);
  
  return (
    <div className={s.plan}>
      <p className={s.desc}>{desc}</p>
      <div className={s.priceWrapper}>
        <div className={s.price}>{price} ГРН</div>
        <div className={s.term}>
          Зроблю за {term} {dayString}
        </div>
      </div>
      <div className={s.revisions}>Кількість допрацювань: {revisions}</div>

      <div className={s.bottomTitle}>{bottomTitle}</div>

      {options.map((option) => (
        <Accordion
          key={option.id}
          title={option.title}
          className={s.title}
          content={<Additional {...option} />}
        />
      ))}
      <div className={s.buy}>
        <Button className={s.button}>Придбати за {price} гривень</Button>
      </div>
    </div>
  );
};

export default Plan;