import React, { FC } from 'react';
import s from "./Requirements.module.scss";
const Requirements: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Вимоги до замовника</div>
      <div className={s.items}>
        <div className={s.item}>
          1. Предоставить Техническое задание где есть текста для сайта и все
          необходимые медиа(фото, видео и т.п.)
        </div>
        <div className={s.item}>2. Требование 2</div>
      </div>
    </div>
  );
};

export default Requirements;