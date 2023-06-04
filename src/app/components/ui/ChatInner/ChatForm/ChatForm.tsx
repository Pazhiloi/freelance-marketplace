import React, { FC } from 'react';
import s from "./ChatForm.module.scss";
import { fileMenu } from '../../../../data/data';
import Button from '../../Button/Button';
const ChatForm: FC = () => {
  return (
    <div className={s.form}>
      <div className={s.imgWrapper}>
      <img src={fileMenu} alt="" className={s.img} />
      </div>

      <input type="text" placeholder='Введіть Ваше повідомлення' className={s.input} />

      <div className={s.buttonWrapper}>
        <Button className={s.button}>
          Надіслати
        </Button>
      </div>
    </div>
  );
};

export default ChatForm;