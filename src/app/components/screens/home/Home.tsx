import React, { FC } from 'react';
import FreelanceServices from '../../sections/FreelanceServices/FreelanceServices';
import ActualWorks from '../../sections/ActualWorks/ActualWorks';

const Home: FC = () => {
  return (
    <div className='container'>
      <FreelanceServices/>
      <ActualWorks/>
    </div>
  );
};

export default Home;