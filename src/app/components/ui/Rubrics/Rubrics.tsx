import React, { FC, useEffect, useState } from "react";
import s from "./Rubrics.module.scss";
import { rubrics } from "../../../data/data";
import Rubric from "./Rubric";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
const Rubrics: FC = () => {
  const [isMarket, setIsMarket] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/market") {
      setIsMarket(true);
    }else{
      setIsMarket(false);
    }
  }, [pathname]);
  
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.items}>
          {rubrics.map((r, idx) => (
            <Rubric key={r.id} title={r.title} id={idx} isMarket={isMarket} />
          ))}
          <Button
            className={
              isMarket
                ? `color-orange ${s.lastItem}`
                : `color-orange ${s.lastItem} item__c`
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
