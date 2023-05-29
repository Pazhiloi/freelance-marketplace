import React, { FC } from 'react';
import s from "./Footer.module.scss";
interface IFollowImage{
  desc: string;
  img: string;
}
const FollowImage: FC<IFollowImage> = ({desc, img}) => {
  return (
    <img src={img} alt={desc} className={s.img} />
  );
};

export default FollowImage;