import React, { FC, ReactNode } from 'react';
import s from "./Section.module.scss";

interface ISection {
  children: ReactNode
}
const Section: FC<ISection> = ({children}) => {
  return <section className={s.section}>
    {children}
  </section>;
};

export default Section;