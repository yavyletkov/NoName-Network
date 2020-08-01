import React from 'react';
import s from './UserCard.module.css';
import Status from '../../Status/Status';
import defaultUserIcon from './../../../../assets/images/default-user.jpg'


const UserCard = (props) => {

    const onUserPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updateUserPhoto(e.target.files[0])
        }
    }

    let userPhotoURL = props.userInfo.photos.large || defaultUserIcon;

    return <div className={s.userCard}>

            <div className={s.userPhoto}>
                <img
                    src={userPhotoURL}
                    alt=''/>
                <div className={s.photoUpload}>
                    {props.id === props.authorizedUserID ?
                        <label className={s.label}>CHANGE PHOTO
                            <input name={'uploadPhoto'} className={s.input} onChange={onUserPhotoSelected} type="file"/>
                        </label> :
                        null}
                </div>
            </div>

            <div className={s.fullName}>{props.userInfo.fullName}</div>

            <Status authorizedUserID={props.authorizedUserID} id={props.id}
                    userStatus={props.userStatus} getUserStatus={props.getUserStatus}
                    updateUserStatus={props.updateUserStatus}/>



        </div>
}


export default UserCard;