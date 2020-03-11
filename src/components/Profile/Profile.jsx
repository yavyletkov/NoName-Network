import React from 'react';
import s from './Profile.module.css';
import ProfilePostsArea from "./ProfilePostsArea/ProfilePostsArea";



const Profile = () => {
    return <main className={s.profile}>
         <div className={s.profileHeader}>Баннер профиля</div>
         <div className={s.profilePhoto}>Ава</div>
         <div className={s.profileInfo}>Информация</div>
         <ProfilePostsArea />
    </main>
}

export default Profile;
