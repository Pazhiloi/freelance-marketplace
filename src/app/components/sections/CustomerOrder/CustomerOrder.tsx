import React, { FC } from 'react';
import s from "./CustomerOrder.module.scss";
import OrderDescription from '../../ui/OrderDescription/OrderDescription';
import { user6 } from '../../../data/usersImages';
const CustomerOrder: FC = () => {

  const isFreelancer = true
  return (
    <div className={s.section}>
      <div className={s.left}>
        <OrderDescription />
      </div>
      <div className={s.right}>
        <div className={s.customerWrapper}>
          <img src={user6} alt="customer avatar" className={s.img} />
          <div className={s.nameWrapper}>
            <div className={s.name}>Екатерина Иванова</div>
            <div className={s.projects}>Розміщено проектів на биржі: 25</div>
            <div className={s.ratingWrapper}>
              <div className={s.rating}>4</div>
              <div className={s.reviews}>15 відгуків</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrder;