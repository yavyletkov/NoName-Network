import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.post}>

        <div className={s.main}>
            {props.text || 'default text'}
        </div>

        <div className={s.footer}>
            0 likes | 0 reposts
        </div>
    </div>)

}

export default Post;
