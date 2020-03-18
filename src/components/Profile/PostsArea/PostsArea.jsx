import React from 'react';
import s from './PostsArea.module.css';
import Post from './Post/Post';

const PostsArea = (props) => {


    let posts = props.postsData.map(function(item) {
        return (<Post key={item.id} id={item.id} text={item.text} />)
    });

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', text: text});
    }

    let onClick = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    return <div className={s.postsArea}>

        <textarea
            ref={newPostElement}
            className='textArea'
            value={props.newPostText}
            onChange={onPostChange}
            placeholder='Tell something'>
        </textarea>
        <br></br>
        <button
            onClick={onClick}>
            Post!
        </button>

        <div className={s.list}>
            { posts }
        </div>
    </div>
}

export default PostsArea;
