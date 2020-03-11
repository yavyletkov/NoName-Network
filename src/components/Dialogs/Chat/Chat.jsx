import React from 'react';
import s from './Chat.module.css';


const Chat = () => {
    return (
        <div className={s.chat}>
            <div className={s.message}></div>
        </div>
    )
}

export default Chat;
