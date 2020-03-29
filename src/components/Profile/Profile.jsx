import React from 'react';
import s from './Profile.module.css';
import PostsAreaContainer from "./PostsArea/PostsAreaContainer";

const Profile = (props) => {
    return <main className={s.profile}>
        <div className={s.cover}>
            <img src='https://buntingfamilypharmacy.com/wp-content/uploads/2019/01/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg' alt=''></img>
        </div>
        <div className={s.userPhoto}>
            <img src='https://www.nelson-chambers.co.uk/front/images/default-user.jpg' alt=''></img>
        </div>
        <div className={s.userInfo}>User info</div>
        <PostsAreaContainer state={props.profileState}
            dispatch={props.dispatch} />
    </main>
}

export default Profile;
