import React from 'react';
import s from './ProfileInfo.module.css';
import UserCard from "./UserCard/UserCard";



const ProfileInfo = (props) => {

    return <div className={s.profile}>

        <UserCard {...props}/>

        <div className={s.userInfo}>
            Информация
        </div>

    </div>
}


export default ProfileInfo;