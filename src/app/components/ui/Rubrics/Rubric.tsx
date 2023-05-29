import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import s from './Rubrics.module.scss'
import { writeClassForGrids } from '../../../utils/classes/writeClassForGrids';
interface IRubric{
  title: string;
  id: number;
  isMarket:boolean;
}
const Rubric: FC<IRubric> = ({title, id, isMarket}) => {
  const [classes, setClasses] = useState(writeClassForGrids(id));

  return (
    <Button
      className={
        isMarket
          ? `fw-400 fz-14 ${s.item}`
          : `fw-400 fz-14 ${s.item} ${classes}`
      }
    >
      {title}
    </Button>
  );
};

export default Rubric;