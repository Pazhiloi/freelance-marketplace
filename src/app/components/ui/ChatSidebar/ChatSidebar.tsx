import React, { FC } from 'react';
import s from "./ChatSidebar.module.scss";
import Input from './Input/Input';
import { myReviews } from '../../../data/works';
import Preview from './Preview/Preview';
const ChatSidebar: FC = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.input}>
        <Input/>
      </div>
      <div className={s.previews}>
        {
          myReviews.map(({id, name, img }) => (
            <Preview key={id} name={name} img={img}/>
          ))
        }
      </div>
    </div>
  );
};

export default ChatSidebar;