import React, { FC } from 'react';
import s from "./Preview.module.scss";
interface IPreview {
  name: string;
  img: string;
}
const Preview: FC<IPreview> = ({name, img}) => {
  return (
    <div className={s.preview}>
      <img src={img} alt={name} className={s.img} />
      <div className={s.nameWrapper}>
        <div className={s.name}>{name}</div>
        <p className={s.text}>Ну че там, сделал?</p>
      </div>
    </div>
  );
};

export default Preview;