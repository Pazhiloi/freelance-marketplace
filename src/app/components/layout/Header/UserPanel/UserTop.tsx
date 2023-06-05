import React, { FC } from 'react';
import s from "./UserPanel.module.scss";
import { avatar1, chevronDown } from '../../../../data/data';
import { useActions } from '../../../../hooks/useActions';
import { useUI } from '../../../../hooks/useSelectors';
const UserTop: FC = () => {
  const {setUserMenu} = useActions()
  const { userMenuActive } = useUI();
  const handleClick = () => {
    setUserMenu()
  }
  const chevronClassName = userMenuActive
    ? `${s.chevron} ${s.active}`
    : `${s.chevron}`;
  return (
    <div className={s.userTop}>
      <div className={s.name}>Ернар Ибрагимов</div>
      <img src={avatar1} alt="avatar icon" className={s.userImg} />
      <img
        onClick={handleClick}
        src={chevronDown}
        alt="chevron icon"
        className={chevronClassName}
      />
    </div>
  );
};

export default UserTop;