import React, { FC } from "react";
import s from "./MyWork.module.scss";
import { IMyWork } from "./my-work.interface";
const MyWork: FC<IMyWork> = ({ title, price, img }) => {
  return <div className={s.item}>
    <img src={img} alt="work img" className={s.img} />
    <div className={s.title}>{title}</div>
    <div className={s.price}>{price} гривень</div>
  </div>;
};

export default MyWork;
