import React from 'react';
import s from './PostsArea.module.css';
import Post from "./Post/Post";

const PostsArea = () => {
    return <div className={s.postsArea}>

        <div>
            <textarea></textarea>
            <br></br>
            <button>Post!</button>
        </div>

        <div className={s.list}>
            <Post text='hallo epta'/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    </div>
}

export default PostsArea;
