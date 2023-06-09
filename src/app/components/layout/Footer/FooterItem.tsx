import React, { FC } from 'react';
import s from './Footer.module.scss'
import { IItem } from './footer.interface';

const FooterItem: FC<IItem> = ({item}) => {
  const {title, inner} = item;

  return (
  <div className={s.item}>
    <div className={`${s.title} title fw-700`}>
      {title}
    </div>
    <div className={s.content}>
      {inner.map(it => (
        <p key={it.id} className={`${s.text} fz-14 fw-400`}>
          {it.title}
        </p>
      ))}
    </div>
  </div>
  );
};

export default FooterItem;