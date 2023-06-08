import React, { FC } from "react";
import s from "./Rubrics.module.scss";
import { rubrics } from "../../../data/data";
import Rubric from "./Rubric";
import Button from "../Button/Button";
import { useRubrics } from "./useRubrics";
const Rubrics: FC = () => {
  const {lastItemClassName, isHome} = useRubrics(s)
  
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.items}>
          {rubrics.map((r, idx) => (
            <Rubric key={r.id} title={r.title} id={idx} isHome={isHome} />
          ))}
          <Button
            className={
              lastItemClassName
            }
          >
            Всі категорії
          </Button>
        </div>
      </div>
    </>
  );
};

export default Rubrics;
