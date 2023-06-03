import React, { FC } from 'react';
import s from "./SliderBtn.module.scss";
import { sliderBtn } from '../../../../data/data';
const SliderBtn: FC = () => {
  return (
    <div className={s.btnWrapper}>
      <img src={sliderBtn} alt="" className={s.btn} />
    </div>
  );
};

export default SliderBtn;