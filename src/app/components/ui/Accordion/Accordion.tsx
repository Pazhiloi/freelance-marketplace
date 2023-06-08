import React, { FC } from 'react';
import s from "./Accordion.module.scss";
import { chevronDown } from '../../../data/data';
import { IAccordion } from './accordion.interface';
import { useAccordion } from './useAccordion';

const Accordion: FC<IAccordion> = ({ title, content, className }) => {
  const { chevronClassName, contentClassName, toggleAccordion } = useAccordion(s)
  
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