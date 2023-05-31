import React, { FC } from 'react';
import CustomerOrder from '../../sections/CustomerOrder/CustomerOrder';
import OfferService from '../../sections/OfferService/OfferService';

const Order: FC = () => {
  return (
    <div className='container'>
      <CustomerOrder/>
      <OfferService/>
    </div>
  );
};

export default Order;