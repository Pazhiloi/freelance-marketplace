import React, { FC } from 'react';
import s from "./DetailedInfo.module.scss";
import { detailedInfo } from '../../../data/data';
const DetailedInfo: FC = () => {
  return (
    <div className={s.items}>
      {detailedInfo.map(({ id, img, title, name }) => (
        <div key={id} className={s.item}>
          <div className={s.imgWrapper}>
            <img src={img} alt="type icon" className={s.img} />
            <div className={s.name}>{name}:</div>
          </div>
          <div className={s.description}>{title}</div>
        </div>
      ))}
    </div>
  );
};

export default DetailedInfo;