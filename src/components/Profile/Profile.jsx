import React from 'react';
import s from './Profile.module.css';
import PostsAreaContainer from "./PostsArea/PostsAreaContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <main className={s.profile}>
        <ProfileInfo {...props} />
        <PostsAreaContainer />
    </main>
}

export default Profile;
