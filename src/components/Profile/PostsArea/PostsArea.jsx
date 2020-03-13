import React from 'react';
import s from './PostsArea.module.css';
import Post from './Post/Post';

const PostsArea = (props) => {

    let postsElements = props.postsData.map(function(item) {
        return (<Post key={item.id} id={item.id} text={item.text} />)
    });

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return <div className={s.postsArea}>

        <div>
            <textarea ref={newPostElement} placeholder='Что у вас нового?' className='textArea'></textarea>
            <br></br>
            <button onClick={ addNewPost }>Post!</button>
        </div>

        <div className={s.list}>
            {
                postsElements
            }
        </div>
    </div>
}

export default PostsArea;
