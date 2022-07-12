import React, {FC} from 'react';
import s from './Message.module.css'

type PropsType = {
  avatar: string,
  name: string,
  message: string,
  time: string,
}

export const Message: FC<PropsType> = (props) => {
  return (
    <div className={s.message}>
      <div className={s.message__avatar}>
        <img src={props.avatar} alt="user avatar"/>
      </div>
      <div>
        <h4 className={s.message__name}>{props.name}</h4>
        <p className={s.message__text}>{props.message}</p>
        <span className={s.message__time}>{props.time}</span>
      </div>
    </div>
  )
}