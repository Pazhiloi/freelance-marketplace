import React, { FC } from 'react';
import s from "./Chat.module.scss";
import ChatSidebar from '../../ui/ChatSidebar/ChatSidebar';
import ChatInner from '../../ui/ChatInner/ChatInner';
const Chat: FC = () => {
  return (
    <section className={s.section}>
      <div className={s.left}>
        <ChatSidebar/>
      </div>
      <div className={s.right}>
        <ChatInner/>
      </div>
    </section>
  );
};

export default Chat;