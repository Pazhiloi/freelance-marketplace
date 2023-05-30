import React, { FC } from "react";
import s from "./MyWork.module.scss";
interface IMyWork {
  title: string;
  price: number;
  img: string;
}
const MyWork: FC<IMyWork> = ({ title, price, img }) => {
  return <div className={s.item}>
    <img src={img} alt="work img" className={s.img} />
    <div className={s.title}>{title}</div>
    <div className={s.price}>{price} гривень</div>
  </div>;
};

export default MyWork;
