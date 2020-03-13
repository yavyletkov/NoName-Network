import React from 'react';
import s from './Profile.module.css';
import PostsArea from "./PostsArea/PostsArea";



const Profile = (props) => {
    return <main className={s.profile}>
         <div className={s.cover}>Баннер профиля</div>
         <div className={s.userPhoto}>Ава</div>
         <div className={s.userInfo}>Информация</div>
         <PostsArea postsData={props.state.postsData} />
    </main>
}

export default Profile;
