import React, { FC } from "react";
import s from "./ProfileTop.module.scss";
import { avatar2, settings, skills } from "../../../data/data";
import Skill from "../../ui/Skill/Skill";
import DetailedInfo from "../../ui/DetailedInfo/DetailedInfo";
import Accordion from "../../ui/Accordion/Accordion";
const ProfileTop: FC = () => {
  const isOnline = true;
  const statusClassName = isOnline
    ? `${s.status} ${s.online}`
    : `${s.status} ${s.offline}`;
  return (
    <section className={s.section}>
      <div className={s.left}>
        <div className={s.subtitle}>Дизайнер </div>
        <div className={s.title}>
          <span>Ернар</span> Ибрагимов
        </div>
        <p className={s.text}>
          Работаю дизайнером с 1999 года. Был опыт в газетах, журналах,
          типографиях, рекламных агентствах, издательских домах... Порядка 8
          лет, занимаюсь логотипами и фирменными стилями.
        </p>
        <div className={s.skills}>
          {skills.map(({ skill, id }) => (
            <Skill key={id} skill={skill} />
          ))}
        </div>

        <Accordion
          title="Показати детальну інформацію"
          content={
              <DetailedInfo />
          }
          className={s.topText}
        />
      </div>
      <div className={s.right}>
        <img src={avatar2} alt="avatar img" className={s.avatar} />
        <div className={statusClassName}>{isOnline ? "Онлайн" : "Офлайн"}</div>
        <div className={s.rating}>4</div>
        <div className={s.settings}>
          <img src={settings} alt="" className={s.settingsImg} />
        </div>
      </div>
    </section>
  );
};

export default ProfileTop;
