import React, { FC } from 'react';
import s from "./WorkInfo.module.scss";
import { tags } from '../../../data/data';
import Slider from '../../ui/Slider/Slider';
import OrderTag from '../../ui/OrderTag/OrderTag';
import WorkFaq from '../../ui/WorkFaq/WorkFaq';
import Requirements from '../../ui/Requirements/Requirements';
import Sidebar from '../../ui/Sidebar/Sidebar';
import Reviews from '../Reviews/Reviews';
import { sliderItems } from '../../../data/data';
const WorkInfo: FC = () => {
  return (
    <section className={s.section}>
      <div className={s.left}>
        <h2 className={`${s.title} title`}>Дизайн сайту</h2>
          <div className={s.tags}>
            {tags.map(({ id, title }) => (
              <OrderTag key={id} id={id} title={title} />
            ))}
          </div>
        <Slider items={sliderItems} />
        <p className={s.text}>
          Привет! Раз уж ты открыл этот work, то тебе нужен классный дизайн для
          твоего сайта. И да, поздравляю, ты по адресу! В UX/UI дизайне я уже 2
          года и за это время успел поработать с очень крупными
          компаниями(КазМунайГаз, КБТУ, Hickmet travel, YLP delivery) и
          знаменитыми личностями (Ахметбек Нурсила, Артур Кривов). Создал для
          них очень крутые дизайны сайтов и не только. Хочешь и тебе сделаю?
          Выбери интересующий пакет и поехали!
        </p>

        <div className={s.faq}>
          <WorkFaq />
        </div>
        <div className={s.requirements}>
          <Requirements />
        </div>
        <div className={s.reviews}>
          <Reviews />
        </div>
      </div>
      <div className={s.right}>
        <Sidebar />
      </div>
    </section>
  );
};

export default WorkInfo;