import React, { FC } from 'react';
import s from "./WorkFaq.module.scss";
import { faqs } from '../../../data/data';
import Accordion from '../Accordion/Accordion';

const Faq: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Поширені запитання</div>
      {faqs.map(({ id, title, text }) => (
        <Accordion
          className={s.accordionTitle}
          key={id}
          title={title}
          content={<p className={s.text}>{text}</p>}
        />
      ))}
    </div>
  );
};

export default Faq;