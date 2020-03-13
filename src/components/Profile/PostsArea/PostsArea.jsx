import React from 'react';
import s from './PostsArea.module.css';
import Post from './Post/Post';

const PostsArea = (props) => {

    let postsElements = props.postsData.map(function(item) {
        return (<Post key={item.id} id={item.id} text={item.text} />)
    })

    return <div className={s.postsArea}>

        <div>
            <textarea placeholder='Что у вас нового?' cols='100' className='textArea'></textarea>
            <br></br>
            <button>Post!</button>
        </div>

        <div className={s.list}>
            {
                postsElements
            }
        </div>
    </div>
}

export default PostsArea;
