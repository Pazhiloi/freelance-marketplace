import React, { FC } from 'react';
import s from "./Stages.module.scss";
import a from "../../shared/Add.module.scss";
import { plans } from '../../../data/works';
import AddPlan from './AddPlan/AddPlan';
import AddOption from './AddOption/AddOption';
import { addOrange } from '../../../data/data';
const Second: FC = () => {
  return (
    <div className={s.second}>
      <div className={s.plans}>
        {plans.map(({ id, title }) => (
          <AddPlan key={id} title={title} />
        ))}
      </div>
      <div className={a.addOption}>
        <AddOption />
        <div className={a.add}>
          <img src={addOrange} alt="" className={a.addImg} />
          <div className={a.addTitle}>Додати нову опцію</div>
        </div>
      </div>
    </div>
  );
};

export default Second;