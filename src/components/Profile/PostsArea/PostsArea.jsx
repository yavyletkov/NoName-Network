import React from 'react';
import s from './PostsArea.module.css';
import Post from './Post/Post';
import PostForm from "./PostForm/PostForm";

const PostsArea = (props) => {

    let posts = props.postsData.map(function(item) {
        return (<Post key={item.id} id={item.id} text={item.text} />)
    });

    const onSubmit = (formData) => {
        console.log(formData)
        props.addPost(formData.postText);
        formData.postText = ''
    }

    return <div className={s.postsArea}>

        <PostForm onSubmit={onSubmit}/>

        <div className={s.list}>
            { posts }
        </div>
    </div>
}

export default PostsArea;
