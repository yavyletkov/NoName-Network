import React from 'react';
import s from './FriendPreview.module.css';

const FriendPreview = (props) => {
    return (
        <div className={s.friendPreview}>
            <div className={s.ava}></div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default FriendPreview;
