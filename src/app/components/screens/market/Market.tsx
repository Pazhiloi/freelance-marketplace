import React, { FC } from 'react';
import MarketTop from '../../sections/MarketTop/MarketTop';
import Jobs from '../../sections/Jobs/Jobs';

const Market: FC = () => {
  return (
    <div className='container'>
      <MarketTop/>
      <Jobs/>
    </div>
  );
};

export default Market;