import React from 'react';
import s from './Post.module.css'
import likeIcon from "../../../../assets/images/outline_favorite_black_18dp.png"

const Post = (props) => {
    return (
    <div className={s.post}>

        <div className={s.main}>
            {props.text || 'default text'}
        </div>

        <div className={s.footer}>
            0 <img src={likeIcon} alt={'like'}/>| 0 reposts
        </div>
    </div>)

}

export default Post;
