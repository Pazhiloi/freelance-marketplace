import React, { FC } from 'react';
import s from './ActualWork.module.scss'
import Button from '../Button/Button';
interface IActualWork {
  img: string;
  title: string;
  description: string;
}
const ActualWork: FC<IActualWork> = ({ img, title, description }) => {
  return <div className={s.item}>
    <div className={s.top}>
      <img src={img} alt={'user avatar'} className={s.img} />
      <div className={s.title}>
        {title}
      </div>
    </div>
    <p className={s.description}>
      {description}
    </p>
    <Button className={s.button}>
      Подивитись
    </Button>
  </div>;
};

export default ActualWork;