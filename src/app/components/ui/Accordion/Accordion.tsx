import React, { FC,useState } from 'react';
import s from "./Accordion.module.scss";
import { chevronDown } from '../../../data/data';
import { IAccordion } from './accordion.interface';

const Accordion: FC<IAccordion> = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const chevronClassName = !isOpen ? `${s.chevron}` : `${s.chevron} ${s.open}`;
  const contentClassName = isOpen ? `${s.content} ${s.open}` : `${s.content}`;
  
  return (
    <div className={s.accordion}>
      <div className={s.top} onClick={toggleAccordion}>
        <div className={className}>{title}</div>
        <img
          src={chevronDown}
          alt="chevron icon"
          className={chevronClassName}
        />
      </div>

      <div className={contentClassName}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;