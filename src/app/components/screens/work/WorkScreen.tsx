import React, { FC } from 'react';
import WorkInfo from '../../sections/WorkInfo/WorkInfo';
import Offers from '../../sections/Offers/Offers';
import Reviews from '../../sections/Reviews/Reviews';

const WorkScreen: FC = () => {
  return (
    <div className='container'>
      <WorkInfo/>
      <Reviews/>
    </div>
  );
};

export default WorkScreen;