import React, { FC } from "react";
import s from "./Additional.module.scss";
import { IOption } from "../Plan";
import Button from "../../Button/Button";

const Additional: FC<IOption> = ({ text, term, price }) => {
  return <div className={s.option}>
    <p className={s.text}>
      {text}
    </p>
    <div className={s.term}>
      Термін роботи: {term} день
    </div>
    <div className={s.price}>
      Ціна: {price} гривень
    </div>
    <Button className={s.button}>
      Додати до замовлення
    </Button>
  </div>;
};

export default Additional;
