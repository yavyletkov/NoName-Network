import React from 'react';
import s from './Chat.module.css';
import Message from './Message/Message'

const Chat = (props) => {

    let chatListElements = props.messagesData.map(function(item) {
        return (<Message key={item.id} id={item.id} text={item.text} />)
    })

    return (
        <div className={s.chat}>
            {chatListElements}
        </div>
    )
}

export default Chat;
