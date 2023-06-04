import React, { FC } from 'react';
import s from "./ChatInner.module.scss";
import User from './User/User';
import Content from './Content/Content';
import ChatForm from './ChatForm/ChatForm';
const ChatInner: FC = () => {
  return (
    <div className={s.inner}>
      <div className={s.top}>
        <User/>
      </div>
      <div className={s.content}>
        <Content/>
      </div>
      <div className={s.bottom}>
        <ChatForm/>
      </div>
      
    </div>
  );
};

export default ChatInner;