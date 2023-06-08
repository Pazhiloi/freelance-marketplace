import React, { FC } from "react";
import s from "./Work.module.scss";
import FeatureStar from "../FeatureStar/FeatureStar";
import Button from "../Button/Button";
import { writeClassForStatus } from "../../../utils/classes/writeClassForStatus";
import { IWork } from "./work.interface";
const Work: FC<IWork> = ({
  id,
  title,
  price,
  img,
  userImg,
  name,
  rating,
  projects,
  isHistory,
  plan,
  date,
  status,
}) => {
  const classStatus = writeClassForStatus(status || '');

  return (
    <div className={s.item}>
      <div className={s.top}>
        <img src={img} alt="item img" className={s.img} />
        <div className={s.star}>
          <FeatureStar />
        </div>
      </div>
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        {isHistory ? (
          <div className={s.plan}>{plan}</div>
        ) : (
          <div className={s.price}>{price} гривень</div>
        )}
        {isHistory ? (
          <div className={s.infoWrapper}>
            <div className={s.dateWrapper}>
              <div className={`${s.price} ${s.black}`}>{price} гривень</div>
              <div className={s.date}>{date}</div>
            </div>
            <div className={`${s.status} ${classStatus}`}>{status}</div>
            <div className={s.buttons}>
              <Button className={`${s.button} ${s.chat}`}>B чат</Button>
              <Button className={`${s.button} ${s.more}`}>Детальніше</Button>
            </div>
          </div>
        ) : (
          <div className={s.user}>
            <div className={s.userWrapper}>
              <img src={userImg} alt="user avatar" className={s.userImg} />
              <div className={s.nameWrapper}>
                <div className={s.name}>{name}</div>
                <div className={s.projects}>Виконано проектів: {projects}</div>
              </div>
            </div>
            <div className={s.rating}>{rating}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
