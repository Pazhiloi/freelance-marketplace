import React, { FC } from 'react';
import s from "./CustomerOrder.module.scss";
import OrderDescription from '../../ui/OrderDescription/OrderDescription';
import { user6 } from '../../../data/usersImages';
import Button from '../../ui/Button/Button';
import { isFreelancer } from '../../screens/order/Order';

const CustomerOrder: FC = () => {
const renderEditButtons = () => {
  if (!isFreelancer) {
    return (
      <div className={s.topButtons}>
        <Button className={`${s.button} ${s.edit}`}>Редагувати</Button>
        <Button className={`${s.button} ${s.close}`}>
          Закрити без виконання
        </Button>
      </div>
    );
  } else{
    return ''
  }
}

  
  return (
    <div className={s.section}>
      <div className={s.left}>
        <OrderDescription />
      </div>
      <div className={s.right}>
        {renderEditButtons()}

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
        <Button className={s.messageButton}>Написати</Button>
      </div>
    </div>
  );
};

export default CustomerOrder;