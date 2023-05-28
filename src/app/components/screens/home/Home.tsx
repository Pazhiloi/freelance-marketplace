import React, { FC } from 'react';
import FreelanceServices from '../../sections/FreelanceServices/FreelanceServices';
import ActualWorks from '../../sections/ActualWorks/ActualWorks';
import TopWorkers from '../../sections/TopWorkers/TopWorkers';

const Home: FC = () => {
  return (
    <div className='container'>
      <FreelanceServices/>
      <ActualWorks/>
      <TopWorkers/>
    </div>
  );
};

export default Home;