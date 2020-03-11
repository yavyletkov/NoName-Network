import React from 'react';
import s from './Dialogs.module.css';
import ChatList from './ChatList/ChatList'
import Chat from './Chat/Chat'


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ChatList />
            <Chat />
        </div>
    )
}

export default Dialogs;
