import React, {useState} from 'react';
import s from './UserInfo.module.css';
import EditInfoForm from "./EditInfoForm/EditInfoForm";


const UserInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    const onActivateEditModeButtonClick = () => {
        setEditMode(true)
    }

    const onEditInfoFormSubmit = (formData) => {
        console.log('formdata', formData)
        let userInfoToSend = {
            "aboutMe": formData.aboutMe,
            "contacts": {
                facebook: formData.facebook,
                github: formData.github,
                instagram: formData.instagram,
                mainLink: formData.mainLink,
                twitter: formData.twitter,
                vk: formData.vk,
                website: formData.website,
                youtube: formData.youtube
            },
            "lookingForAJob": formData.lookingForAJob,
            "lookingForAJobDescription": formData.lookingForAJobDescription,
            "fullName": formData.fullName
        };
        props.updateUserInfo(userInfoToSend)
            .then(() => {
                setEditMode(false)
        })

    }

    const Contact = (contactName, path) => {
        return <div className={s.contact}>
            <b>{contactName}:</b> {path ? path : <span className={s.noInfo}>no info</span>}
        </div>
    }

    let initialFormValues = {
        fullName: props.userInfo.fullName,
        lookingForAJob: props.userInfo.lookingForAJob,
        lookingForAJobDescription: props.userInfo.lookingForAJobDescription,
        aboutMe: props.userInfo.aboutMe,
        github: props.userInfo.contacts.github,
        vk: props.userInfo.contacts.vk,
        website: props.userInfo.contacts.website,
        youtube: props.userInfo.contacts.youtube,
        instagram: props.userInfo.contacts.instagram,
        facebook: props.userInfo.contacts.facebook,
        twitter: props.userInfo.contacts.twitter,
        mainLink: props.userInfo.contacts.mainLink
    };

    if (!editMode) {
        return <div className={s.userInfo}>

            <div className={s.jobAndAboutMeContainer}>

                <div className={s.lookingForAJob}>
                    <b>Am I looking for a job right now:</b> {props.userInfo.lookingForAJob ? 'yes' : 'no'}
                </div>

                <div className={s.lookingForAJobDescription}>
                    <b>My professional skills:</b> {props.userInfo.lookingForAJobDescription || <span className={s.noInfo}>no info</span>}
                </div>

                <div className={s.aboutMe}>
                    <b>About Me:</b> {props.userInfo.aboutMe || <span className={s.noInfo}>no info</span>}
                </div>

            </div>

            <div className={s.contactsWrapper}>
                {Contact('Github', props.userInfo.contacts.github)}
                {Contact('VK', props.userInfo.contacts.vk)}
                {Contact('Website', props.userInfo.contacts.website)}
                {Contact('Youtube', props.userInfo.contacts.github)}
                {Contact('Instagram', props.userInfo.contacts.instagram)}
                {Contact('Facebook', props.userInfo.contacts.facebook)}
                {Contact('Twitter', props.userInfo.contacts.twitter)}
                {Contact('MainLink', props.userInfo.contacts.mainLink)}
                {props.authorizedUserID === props.id ?
                    <button onClick={onActivateEditModeButtonClick} className={s.activateEditModeButton}>MAKE CHANGES</button> : null}
            </div>
        </div>
    } else return <EditInfoForm initialValues={{...initialFormValues}} onSubmit={onEditInfoFormSubmit} {...props.userInfo} editMode={editMode}/>
}


export default UserInfo;