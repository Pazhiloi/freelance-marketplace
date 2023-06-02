import React, { FC } from 'react';
import s from "./WorkFaq.module.scss";
import { faqs } from '../../../data/data';
import Accordion from '../Accordion/Accordion';

const Faq: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Поширені запитання</div>
      {faqs.map(({ id, title, text }) => (
        <Accordion key={id} title={title} content={text} />
      ))}
    </div>
  );
};

export default Faq;