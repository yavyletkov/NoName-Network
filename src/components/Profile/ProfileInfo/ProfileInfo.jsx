import React from 'react';
import s from './ProfileInfo.module.css';

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
                <div className={s.status}>
                    { props.userInfo.status ? `status: ${props.userInfo.status}` : null}
                </div>
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