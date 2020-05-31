import React from 'react';
// {useState} from 'react';
import s from './EditInfoForm.module.css';
import {Field, reduxForm} from "redux-form";


const EditInfoForm = (props) => {

    // console.log('props', props)

    const renderField = ({input, placeholder, type, meta: {touched, error, warning}}) => {

        // const hasError = touched && error;
        // return <div>
        //     <input {...input} className={s.field + ' ' + (hasError?s.error:'')} placeholder={placeholder} type={type}/>
        //     {touched && ((error && <span className={s.errorSpan}> {error} </span>) || (warning && <span className={s.warningSpan}> {warning} </span>))}
        // </div>

        return <span>
            <input {...input} className={s.field} placeholder={placeholder} type={type} />
        </span>
    }

    return <form onSubmit={props.handleSubmit} className={s.editInfoForm}>
        <div className={s.jobAndAboutMeContainer}>

            <div className={s.fullName}>
                <b>Fullname:</b>
                <Field name={'fullName'} component={renderField} type={'text'} />
            </div>

            <div className={s.lookingForAJob}>
                <b>Looking for a job right now:</b>
                <Field name={'lookingForAJob'} component={renderField} type={'checkbox'} />
            </div>

            <div className={s.lookingForAJobDescription}>
                <b>My professional skills:</b>
                <Field name={'lookingForAJobDescription'} component={renderField} placeholder={'Tell something about your professional skills'} type={'text'} />
            </div>

            <div className={s.aboutMe}>
                <b>About Me:</b>
                <Field name={'aboutMe'} component={renderField} placeholder={'Tell something about yourself'} type={'text'} />
            </div>

        </div>

        <div className={s.contactsWrapper}>
            <div>
                <b>Github</b>
                <Field name={'github'} component={renderField} placeholder={''} type={'text'} />
            </div>

            <div>
                <b>VK</b>
                <Field name={'vk'} component={renderField} placeholder={''} type={'text'} />
            </div>

            <div>
                <b>Website</b>
                <Field name={'website'} component={renderField} placeholder={''} type={'text'} />
            </div>

            <div>
                <b>Youtube</b>
                <Field name={'youtube'} component={renderField} placeholder={''} type={'text'} />
            </div>

            <div>
                <b>Instagram</b>
                <Field name={'instagram'} component={renderField} placeholder={''} type={'text'} />
            </div>

            <div>
                <b>Facebook</b>
                <Field name={'facebook'} component={renderField} placeholder={''} type={'text'} />
            </div>

            <div>
                <b>Twitter</b>
                <Field name={'twitter'} component={renderField} placeholder={''} type={'text'} />
            </div>

            <div>
                <b>MainLink</b>
                <Field name={'mainLink'} component={renderField} placeholder={''} type={'text'} />
            </div>

            <button className={s.saveChangesButton}>SAVE CHANGES</button>

        </div>

        {props.error?<div className={s.summaryError}>{props.error}</div>:null}
    </form>
}


export default reduxForm({form: 'userInfo'})(EditInfoForm);