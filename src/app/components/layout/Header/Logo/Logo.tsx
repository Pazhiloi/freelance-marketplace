import React, { FC } from 'react';
import s from './Logo.module.scss'
import { logo } from '../../../../data/data';
import { useNavigate } from 'react-router-dom';
const Logo: FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className={s.logoContainer} onClick={handleClick}>
      <img src={logo} alt="logotype" className={s.logo} />
      <div className={`main-title ${s.name}`}>
        worktap
      </div>
    </div>
  );
};

export default Logo;