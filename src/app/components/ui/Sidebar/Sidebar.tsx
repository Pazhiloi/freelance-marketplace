import React, { FC } from 'react';
import s from "./Sidebar.module.scss";
import { plans } from '../../../data/works';
import Accordion from '../Accordion/Accordion';
import Plan from '../Plan/Plan';
import User from '../User/User';
import { skills } from '../../../data/data';
import Skill from '../Skill/Skill';
const Sidebar: FC = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.plans}>
        {plans.map((plan) => (
          <Accordion
            key={plan.id}
            title={plan.title}
            className={s.title}
            content={<Plan {...plan} />}
          />
        ))}
      </div>

      <div className={s.user}>
        <User />
      </div>
      <div className={s.skills}>
        {skills.map(({ skill, id }) => (
          <Skill key={id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;