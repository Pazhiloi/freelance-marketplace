import React, { FC } from 'react';
import s from './Message.module.scss'
import { IMessage } from './message.interface';
const Message: FC<IMessage> = ({text,
isYours}) => {
  const sideClassName = isYours
    ? `${s.message} ${s.right}`
    : `${s.message} ${s.left}`;
 
    const wrapperClassName = isYours
      ? `${s.messageWrapper} ${s.right}`
      : `${s.messageWrapper} ${s.left}`;

  return (
    <div className={wrapperClassName}>
      <p className={sideClassName}>{text}</p>
    </div>
  );
};

export default Message;