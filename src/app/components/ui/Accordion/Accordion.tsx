import React, { FC, ReactNode, useState } from 'react';
import s from "./Accordion.module.scss";
import { chevronDown } from '../../../data/data';
interface IAccordion {
  title: string;
  content: ReactNode;
  className?: string;
}
const Accordion: FC<IAccordion> = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={s.accordion}>
      <div className={s.top} onClick={toggleAccordion}>
        <div className={className}>{title}</div>
        <img
          src={chevronDown}
          alt="chevron icon"
          className={!isOpen ? `${s.chevron}` : `${s.chevron} ${s.open}`}
        />
      </div>

      <div className={isOpen ? `${s.content} ${s.open}` : `${s.content}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;