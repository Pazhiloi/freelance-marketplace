import React, { FC } from 'react';
import s from "./OrderTag.module.scss";
import { chevronRight, tags } from '../../../data/data';
interface IOrderTag {
  id: number;
  title: string;
}
const OrderTag: FC<IOrderTag> = ({ id, title }) => {
  const renderChevron = () => {
    if (id !== tags.length) {
      return <img src={chevronRight} alt="" className={s.img} />
    }else {
      return ''
    }
  }
  return <div className={s.tag}>
    <div className={s.title}>{title}</div>
    {renderChevron()}
  </div>;
};

export default OrderTag;