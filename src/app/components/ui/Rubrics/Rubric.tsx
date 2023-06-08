import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import s from './Rubrics.module.scss'
import { writeClassForGrids } from '../../../utils/classes/writeClassForGrids';
import { IRubric } from './rubrics.interface';

const Rubric: FC<IRubric> = ({ title, id, isHome }) => {
  const [classes, setClasses] = useState(writeClassForGrids(id));

  return (
    <Button
      className={
        !isHome ? `fw-400 fz-14 ${s.item}` : `fw-400 fz-14 ${s.item} ${classes}`
      }
    >
      {title}
    </Button>
  );
};

export default Rubric;