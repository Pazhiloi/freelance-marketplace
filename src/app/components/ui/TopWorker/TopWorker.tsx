import React, { FC } from "react";
import s from "./TopWorker.module.scss";
import b from "../../shared/ActualButton.module.scss";
import Button from "../Button/Button";

interface ITopWorker {
  img: string;
  name: string;
  profession: string;
  projectsCompleted: number;
  rating: number;
  online: boolean;
}
const TopWorker: FC<ITopWorker> = ({
  img,
  name,
  profession,
  projectsCompleted,
  rating,
  online,
}) => {
  return (
    <div className={s.item}>
      <div className={s.top}>
        <div className={s.left}>
          <img src={img} alt="user avatar" className={s.img} />
          <span className={online ? `${s.online}` : `${s.offline}`}></span>
        </div>
        <div className={s.right}>
          <div className={s.name}>{name}</div>
          <div className={s.profession}>{profession}</div>
          <div className={s.completed}>
            Проектів зроблено:  {projectsCompleted}
          </div>
          <div className={s.rating}>
            {rating}
          </div>
        </div>
      </div>
      <Button className={b.button}>Написати</Button>
    </div>
  );
};

export default TopWorker;
