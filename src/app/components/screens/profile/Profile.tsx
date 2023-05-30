import React, { FC } from 'react';
import ProfileTop from '../../sections/ProfileTop/ProfileTop';
import MyWorks from '../../sections/MyWorks/MyWorks';

const Profile: FC = () => {
  return (
    <div className='container'>
      <ProfileTop/>
      <MyWorks/>
    </div>
  );
};

export default Profile;