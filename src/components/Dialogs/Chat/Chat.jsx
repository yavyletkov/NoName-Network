import React from 'react';
import s from './Chat.module.css';
import Message from './Message/Message'

const Chat = (props) => {

    let messages = props.messagesData.map(function(item) {
        return (<Message key={item.id} id={item.id} text={item.text} />)
    });

    let newMessage = React.createRef();

    let onMessageChange = () => {
        let symbol = newMessage.current.value;
        props.updateNewMessageText(symbol);
    }

    let onClick = () => {
        props.sendMessage();
    };

    return (
        <div className={s.container}>
            <div className={s.chat}>
                {messages}
            </div>
            <div className={s.field}>
                <textarea
                    ref={ newMessage }
                    className='textArea'
                    value={props.newMessageText}
                    placeholder='Type something'
                    onChange={onMessageChange}>
                </textarea>
                <button onClick={ onClick }>Send</button>
            </div>
        </div>
    )
}

export default Chat;
