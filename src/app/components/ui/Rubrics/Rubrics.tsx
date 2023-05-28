import React, { FC } from 'react';
import s from './Rubrics.module.scss'
import { rubrics } from '../../../data/data';
import Rubric from './Rubric';
import Button from '../Button/Button';
const Rubrics: FC = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.items}>
          {rubrics.map((r, idx) => (
            <Rubric key={r.id} title={r.title} id={idx} />
          ))}
            <Button className={`color-orange ${s.lastItem} item__c`}>
              Всі категорії
            </Button>
        </div>
      </div>
    </>
  );
};

export default Rubrics;