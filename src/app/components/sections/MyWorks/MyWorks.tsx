import React, { FC } from "react";
import s from "./MyWorks.module.scss";
import b from "../../shared/LoadMoreButton.module.scss";
import { myWorks } from "../../../data/works";
import MyWork from "../../ui/MyWork/MyWork";
import Button from "../../ui/Button/Button";
import { add } from "../../../data/data";
const MyWorks: FC = () => {
  return (
    <div className={s.section}>
      <h2 className={`title ${s.title}`}>Мої ворки</h2>

      <div className={s.items}>
        <div className={s.createWork}>
          <img src={add} alt="add icon" className={s.img} />
          <div className={s.create}>Створити ворк</div>
        </div>
        {myWorks.map(({ id, title, price, img }) => (
          <MyWork key={id} title={title} price={price} img={img} />
        ))}
      </div>

      <div className={b.loadMore}>
        <Button className={b.button}>Завантажити більше</Button>
      </div>
    </div>
  );
};

export default MyWorks;
