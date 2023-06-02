import React, { FC } from 'react';
import s from "./CustomerOrder.module.scss";
import OrderDescription from '../../ui/OrderDescription/OrderDescription';
import { user6 } from '../../../data/usersImages';
import Button from '../../ui/Button/Button';
import { isFreelancer } from '../../screens/order/Order';
import User from '../../ui/User/User';

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
    <section className={s.section}>
      <div className={s.left}>
        <OrderDescription />
      </div>
      <div className={s.right}>
        {renderEditButtons()}
        <User/>
        <Button className={s.messageButton}>Написати</Button>
      </div>
    </section>
  );
};

export default CustomerOrder;