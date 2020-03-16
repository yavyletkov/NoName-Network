import React from 'react';
import s from './ChatPreview.module.css';
import {NavLink} from 'react-router-dom';

const ChatPreview = (props) => {
    return <NavLink
                className={s.chatPreview}
                to={'/dialogs/' + props.id}
                activeClassName={s.active}>
                {props.name}
            </NavLink>
}

export default ChatPreview;
