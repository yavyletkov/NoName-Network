import React from 'react';
import PostsArea from './PostsArea';

const PostsAreaContainer = (props) => {

    let updateNewPostText = (text) => {
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', text: text});
    }

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    return <PostsArea
        updateNewPostText={updateNewPostText}
        addPost={addPost}
        postsData={props.state.postsData}
        newPostText={props.state.newPostText}/>
}

export default PostsAreaContainer;
