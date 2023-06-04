import React, { FC } from 'react';
import s from "./Content.module.scss";
import { messages } from '../../../../data/messages';
import Message from '../Message/Message';
const Content: FC = () => {
  return (
    <div className={s.content}>
      {
        messages.map(({id, text, isYours}) => (
          <Message key={id} text={text} isYours={isYours}/>
        ))
      }
    </div>
  );
};

export default Content;