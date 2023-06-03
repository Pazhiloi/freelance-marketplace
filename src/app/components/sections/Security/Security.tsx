import React, { FC } from 'react';
import s from "./Security.module.scss";
import m from  '../../shared/Modal.module.scss'
import { securityPolicy } from '../../../data/text';
import { Link } from 'react-router-dom';
import { closeIcon } from '../../../data/data';
const Security: FC = () => {

  const { title, subtitle, list } = securityPolicy;
  return (
    <section className={m.section}>
      <div className={m.inner}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.subtitle}>{subtitle}</div>

        <div className={s.list}>
          {list.map(({ id, text }) => (
            <div key={id} className={s.item}>
             {id}. {text}
            </div>
          ))}
        </div>
        <Link to={"/"}>
          <img src={closeIcon} alt="close icon" className={m.img} />
        </Link>
      </div>
    </section>
  );
};

export default Security;