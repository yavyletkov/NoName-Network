import React from 'react';
import s from './Dialogs.module.css';
import ChatList from './ChatList/ChatList'
import ChatContainer from './Chat/ChatContainer'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <ChatList chatListData={props.chatListData}/>
            <ChatContainer />
        </div>
    )
}

export default Dialogs;
