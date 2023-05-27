import React, { FC } from 'react';
import s from './Footer.module.scss'
import { followImages, footerItems } from '../../../data/data';
import FooterItem from './FooterItem';
const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.top}>
            {footerItems.map((item) => (
              <FooterItem key={item.id} item={item} />
            ))}

            <div className={s.lastItem}>
              <div className={`${s.title} ${s.lastTitle} title fw-700`}>Follow</div>
              <div className={s.imagesWrapper}>
              {
                followImages.map(({id,desc, img}) => (
                  <img key={id} src={img} alt={desc} className={s.img} />
                  ))
                }
                </div>
            </div>
          </div>
          <div className={s.bottom}>
            Copyright @ 2021 | WorkTap – Worktap.KZ. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;