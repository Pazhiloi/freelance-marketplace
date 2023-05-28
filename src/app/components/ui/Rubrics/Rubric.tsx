import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import s from './Rubrics.module.scss'
import { writeClassForGrids } from '../../../utils/classes/writeClassForGrids';
interface IRubric{
  title: string;
  id: number;
}
const Rubric: FC<IRubric> = ({title, id}) => {
  const [classes, setClasses] = useState(writeClassForGrids(id));

  return (
    <Button className={`fw-400 fz-14 ${s.item} ${classes}`}>{title}</Button>
  );
};

export default Rubric;