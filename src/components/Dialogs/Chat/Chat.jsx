import React from 'react';
import s from './Chat.module.css';
import Message from './Message/Message'
import ChatForm from "./ChatForm/ChatForm";

const Chat = (props) => {

    let messages = props.messagesData.map(function(item) {
        return (<Message key={item.id} id={item.id} text={item.text} />)
    });

    let onSubmit = (formData) => {
        props.sendMessage(formData.messageText);
        formData.messageText = '';
    };

    return (
        <div className={s.wrapper}>

            <div className={s.chat}>
                {messages}
            </div>

            <ChatForm onSubmit={onSubmit}/>

        </div>
    )
}

export default Chat;
