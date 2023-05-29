import React, { FC } from "react";
import s from "./MarketTop.module.scss";
import SearchField from "../../ui/SearchField/SearchField";
import Rubrics from "../../ui/Rubrics/Rubrics";
import Chevron from "../../ui/Chevron/Chevron";
const MarketTop: FC = () => {
  return (
    <section className={s.section}>
      <h1 className={`main-title ${s.title}`}>
        Шукайте і знаходьте відповідну роботу серед
        <span className="color-green"> багатьох</span> проектів і покажіть, на що
        ви здатні
      </h1>
      <div className={s.field}>
        <SearchField />
      </div>
      <div className={s.rubricsInner}>
        <Rubrics />
      </div>
      <div className={s.info}>
        Нижче всі роботи по <span className="color-green">дизайну</span>
      </div>
      <div className={s.arrow}>
      <Chevron />
      </div>
    </section>
  );
};

export default MarketTop;
