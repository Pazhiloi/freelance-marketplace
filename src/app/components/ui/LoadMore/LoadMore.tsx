import React, { FC } from 'react';
import s from "./LoadMoreButton.module.scss";
import Button from '../Button/Button';
const LoadMore: FC = () => {
  return (
    <div className={s.loadMore}>
      <Button className={s.button}>
        Завантажити більше
      </Button>
    </div>
  );
};

export default LoadMore;