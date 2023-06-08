import React, { FC } from 'react';
import s from "./UploadFile.module.scss";
import { fileText, pageDown, pageUp } from '../../../data/data';
const UploadFile: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.fileContainer}>
        <img src={pageUp} alt="" className={s.bigImg} />
        <div className={s.info}>
          Перетягніть файл сюди або натисніть <div className={s.download}>Завантажити</div>
        </div>
      </div>
      <p className={s.text}>
        Завантажуйте тільки файли doc, pdf, png, jpg, jpeg та не більше 500 КБ
      </p>
      <div className={s.items}>
        <div className={s.item}>
          <div className={s.left}>
            <img src={fileText} alt="file" className={s.fileText} />
            <span className={s.name}>food.jpg</span>
          </div>
          <div className={s.right}>
            <img src={pageDown} alt="" className={s.smallImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;