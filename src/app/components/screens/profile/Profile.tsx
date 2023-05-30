import React, { FC } from 'react';
import ProfileTop from '../../sections/ProfileTop/ProfileTop';
import MyWorks from '../../sections/MyWorks/MyWorks';
import Reviews from '../../sections/Reviews/Reviews';

const Profile: FC = () => {
  return (
    <div className='container'>
      <ProfileTop/>
      <MyWorks/>
      <Reviews/>
    </div>
  );
};

export default Profile;