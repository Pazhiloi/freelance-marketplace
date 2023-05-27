import React, { FC } from 'react';
import s from './UserPanel.module.scss'
import Button from '../../../ui/Button/Button';
import { useUI } from '../../../../hooks/useSelectors';
import UserTop from './UserTop';
const UserMenu: FC = () => {

  const {userMenuActive} = useUI()

  return (
    <div
      className={
        userMenuActive ? `${s.userWrapper} ${s.active}` : `${s.userWrapper}`
      }
    >
      <UserTop />
      <div
        className={
          userMenuActive ? `${s.userInfo} ${s.active}` : `${s.userInfo}`
        }
      >
        {userMenuActive ? (
          <>
            <div className={s.userButtons}>
              <Button className={`${s.activeBtn}`}>Я замовник</Button>
              <Button className={`${s.btn}`}>Я виконавець</Button>
            </div>
            <div className={s.userList}>
              <div className={s.userItem}>Мій кабінет</div>
              <div className={s.userItem}>Мій замовлення</div>
              <div className={s.userItem}>Історія</div>
              <div className={s.userItem}>Мій гаманець</div>
              <div className={s.userItem}>Мої налаштування</div>
              <div className={`${s.userItem} ${s.logout}`}>Вийти</div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UserMenu;