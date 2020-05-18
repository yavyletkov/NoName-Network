import React from 'react';
import s from './Profile.module.css';
import PostsAreaContainer from "./PostsArea/PostsAreaContainer";
import ProfileMain from "./ProfileMain/ProfileMain";

const Profile = (props) => {
    return <main className={s.profile}>
        <ProfileMain {...props} />
        <PostsAreaContainer />
    </main>
}

export default Profile;
