import React from 'react';
import s from './Chat.module.css';
import Message from './Message/Message'

const Chat = (props) => {

    let messages = props.messagesData.map(function(item) {
        return (<Message key={item.id} id={item.id} text={item.text} />)
    });

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text);
    };

    return (
        <div className={s.chat}>
            {messages}
            <textarea ref={newMessage} placeholder='Type something' className='textArea'></textarea>
            <button onClick={ addMessage }>Send</button>
        </div>
    )
}

export default Chat;
