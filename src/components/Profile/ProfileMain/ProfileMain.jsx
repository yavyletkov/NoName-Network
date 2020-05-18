import React from 'react';
import s from './ProfileMain.module.css';
import UserCard from "./UserCard/UserCard";
import UserInfo from "./UserInfo/UserInfo";



const ProfileMain = (props) => {

    return <div className={s.profile}>

        <UserCard {...props} />

        <UserInfo {...props} />

    </div>
}


export default ProfileMain;