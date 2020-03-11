import React from 'react';
import s from './ChatList.module.css';

import ChatPreview from './ChatPreview/ChatPreview'

const ChatList = () => {
    return (
    <div className={s.chatList}>
        {
        //сюда можно поиск добавить
        }
        <ChatPreview id='1' name='Дима Дима'/>

    </div>)
}

export default ChatList;
