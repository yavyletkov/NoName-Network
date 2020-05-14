import React from 'react';
import s from './UserCard.module.css';
import Status from "../../Status/Status";


const UserCard = (props) => {

    const onUserPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.uploadUserPhoto(e.target.files[0])
        }
    }

    let userPhotoURL = props.userInfo.photos.large || 'https://www.nelson-chambers.co.uk/front/images/default-user.jpg';

    return <div className={s.userCard}>

            <div className={s.userPhoto}>
                <img
                    src={userPhotoURL}
                    alt=''/>
            </div>

            <div className={s.fullName}>{props.userInfo.fullName}</div>

            <Status authorizedUserID={props.authorizedUserID} id={props.id}
                    userStatus={props.userStatus} getUserStatus={props.getUserStatus}
                    updateUserStatus={props.updateUserStatus}/>

            <div className={s.photoUpload}>
                {props.id === props.authorizedUserID ?
                    <input onChange={onUserPhotoSelected} name="userPhoto" type="file"/> :
                    null}
            </div>

        </div>
}


export default UserCard;