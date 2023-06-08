import React, { FC } from 'react';
import s from "./Section.module.scss";
import { ISection } from './section.interface';


const Section: FC<ISection> = ({children}) => {
  return <section className={s.section}>
    {children}
  </section>;
};

export default Section;