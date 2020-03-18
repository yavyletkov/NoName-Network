import React from 'react';
import s from './Dialogs.module.css';
import ChatList from './ChatList/ChatList'
import Chat from './Chat/Chat'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <ChatList chatListData={props.dialogsState.chatListData}/>
            <Chat messagesData={props.dialogsState.messagesData}
                dispatch={props.dispatch} />
        </div>
    )
}

export default Dialogs;
