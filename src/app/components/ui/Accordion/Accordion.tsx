import React, { FC, ReactNode, useState } from 'react';
import s from "./Accordion.module.scss";
import { chevronDown } from '../../../data/data';
interface IAccordion {
  title: string;
  content: ReactNode;
}
const Accordion: FC<IAccordion> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
   const toggleAccordion = () => {
     setIsOpen(!isOpen);
   };
  return (
    <div className={s.accordion}>
      <div className={s.top} onClick={toggleAccordion}>
        <div className={s.title}>{title}</div>
        <img
          src={chevronDown}
          alt="chevron icon"
          className={!isOpen ? `${s.chevron}` : `${s.chevron} ${s.open}`}
        />
      </div>

      <div
        className={isOpen? `${s.content} ${s.open}`: `${s.content}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;