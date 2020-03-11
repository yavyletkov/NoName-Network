import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return <div className={s.post}>
    {props.text || 'default text'}
    </div>

}

export default Post;
