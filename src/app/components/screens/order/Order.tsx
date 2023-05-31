import React, { FC } from 'react';
import CustomerOrder from '../../sections/CustomerOrder/CustomerOrder';
import OfferService from '../../sections/OfferService/OfferService';
import Offers from '../../sections/Offers/Offers';
export const isFreelancer = false;
const Order: FC = () => {
  return (
    <div className='container'>
      <CustomerOrder/>

      {isFreelancer ? (<OfferService/>) : (<Offers/>)}
      
    </div>
  );
};

export default Order;