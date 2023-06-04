import React, { FC } from 'react';
import a from "../../shared/Add.module.scss";
import { addOrange } from '../../../data/data';
import AddFaq from './AddFaq/AddFaq';
const Third: FC = () => {
  return (
    <div>
      <div className={a.addOption}>
        <AddFaq />
        <div className={a.add}>
          <img src={addOrange} alt="" className={a.addImg} />
          <div className={a.addTitle}>Додати питання-відповідь</div>
        </div>
      </div>
    </div>
  );
};

export default Third;