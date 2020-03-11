import React from 'react';
import s from './ProfilePostsArea.module.css';
import SinglePost from "./SinglePost/SinglePost";



const ProfilePostsArea = () => {
    return <div className={s.profilePostsArea}>

        <div>
            <textarea></textarea><br></br>
            <button>Post!</button>
        </div>

        <div className={s.postsList}>
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
                <SinglePost />
        </div>
    </div>
}

export default ProfilePostsArea;
