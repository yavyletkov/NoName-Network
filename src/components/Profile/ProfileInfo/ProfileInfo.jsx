import React from 'react';
import s from './ProfileInfo.module.css';
import Status from "../Status/Status";

const ProfileInfo = (props) => {
    if(props.userInfo) {
        return <div className={s.profileInfo}>
            <div className={s.cover}>
                <img src='https://buntingfamilypharmacy.com/wp-content/uploads/2019/01/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg' alt=''/>
            </div>
            <div className={s.userPhoto}>

                <img src={props.userInfo.photos.large ? props.userInfo.photos.large : 'https://www.nelson-chambers.co.uk/front/images/default-user.jpg'} alt=''/>

            </div>
            <div className={s.userInfo}>
                    { console.log(props.userInfo) }
                    { console.log('govnooooo', props) }
                    <Status yourID={props.yourID} id={props.id} userStatus={props.userStatus} getUserStatus={props.getUserStatus} updateUserStatus={props.updateUserStatus} />
                <div className={s.fullName}>{props.userInfo.fullName}</div>
            </div>

        </div>
    }
    else return <div className={s.profileInfo}>
        <div className={s.cover}>
        </div>
        <div className={s.userPhoto}>

            <img src='https://www.nelson-chambers.co.uk/front/images/default-user.jpg' alt=''/>

        </div>
        <div className={s.userInfo}></div>

    </div>
}


export default ProfileInfo;