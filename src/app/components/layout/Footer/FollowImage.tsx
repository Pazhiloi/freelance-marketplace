import React, { FC } from 'react';
import s from "./Footer.module.scss";
import { IFollowImage } from './footer.interface';

const FollowImage: FC<IFollowImage> = ({desc, img}) => {
  return (
    <img src={img} alt={desc} className={s.img} />
  );
};

export default FollowImage;