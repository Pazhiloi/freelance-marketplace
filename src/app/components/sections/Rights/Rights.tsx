import React, { FC } from 'react';
import s from "./Rights.module.scss";
import m from '../../shared/Modal.module.scss'
import { rights } from '../../../data/text';
import { closeIcon } from '../../../data/data';
import { Link } from 'react-router-dom';
const Rights: FC = () => {
  const {title, subtitle, list} = rights;
  return (
    <section className={m.section}>
        <div className={m.inner}>
          <h2 className={`${s.title} title`}>{title}</h2>
          <div className={s.subtitle}>{subtitle}</div>

          <div className={s.list}>
            {list.map(({ id, text }) => (
              <div key={id} className={s.item}>
                {id}. {text}
              </div>
            ))}
          </div>
          <Link to={'/'}>
          <img src={closeIcon} alt="close icon" className={m.img} />
          </Link>
        </div>
    </section>
  );
};

export default Rights;