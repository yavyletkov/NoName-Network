import React from 'react';
import s from './Profile.module.css';
import PostsAreaContainer from "./PostsArea/PostsAreaContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <main className={s.profile}>
        {console.log('пропсы profile', props)}
        <ProfileInfo {...props} />
        <PostsAreaContainer />
    </main>
}

export default Profile;
