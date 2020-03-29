import React from 'react';
import Chat from './Chat';

const ChatContainer = (props) => {

    let updateNewMessageText = (symbol) => {
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', text: symbol});
    }

    let sendMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'});
    }

    return <Chat
        messagesData={props.state.messagesData}
        sendMessage={sendMessage}
        updateNewMessageText={updateNewMessageText}
        newMessageText={props.state.newMessageText} />
}

export default ChatContainer;
