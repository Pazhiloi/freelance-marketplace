import React, { FC } from "react";
import s from "./Additional.module.scss";
import Button from "../../Button/Button";
import { getDayString } from "../../../../utils/string/getDayString";
import { IOption } from "../plan.interface";

const Additional: FC<IOption> = ({ text, term, price }) => {
  const dayString = getDayString(term);
  return (
    <div className={s.option}>
      <p className={s.text}>{text}</p>
      <div className={s.term}>
        Термін роботи: {term} {dayString}
      </div>
      <div className={s.price}>Ціна: {price} гривень</div>
      <Button className={s.button}>Додати до замовлення</Button>
    </div>
  );
};

export default Additional;
