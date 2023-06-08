import React, { FC } from "react";
import Button from "../Button/Button";
import s from './Skill.module.scss'
import { ISkill } from "./skill.interface";

const Skill: FC<ISkill> = ({ skill }) => {
  return <Button className={s.skill}>{skill}</Button>;
};

export default Skill;
