import React from 'react';
import s from './ChatPreview.module.css';
import {NavLink} from 'react-router-dom';

const ChatPreview = (props) => {
    return (
        <div className={s.dialogPreview}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default ChatPreview;
