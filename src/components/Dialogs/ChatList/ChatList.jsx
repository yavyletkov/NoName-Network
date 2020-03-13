import React from 'react';
import s from './ChatList.module.css';

import ChatPreview from './ChatPreview/ChatPreview';

const ChatList = (props) => {

    let chatListElements = props.chatListData.map(function(item) {
        return (<ChatPreview key={item.id} id={item.id} name={item.name} />)
    });

    return (
    <div className={s.chatList}>
        {
        //сюда можно поиск добавить
        }
        {chatListElements}
    </div>)
}

export default ChatList;
