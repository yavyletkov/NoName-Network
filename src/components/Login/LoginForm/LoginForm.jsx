import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./LoginForm.module.scss";

const required = (value) => value ? undefined : 'required'
const maxLength = (max) => (value) => {
    return value && value.length > max ? `must be ${max} characters or less` : undefined
}
const maxLength50 = maxLength(50)
// const number = (value) => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => {
    const hasError = touched && error;

    return <div>
        <input {...input} className={s.field + ' ' + (hasError?s.error:'')} placeholder={placeholder} type={type}/>
        {touched && ((error && <span className={s.errorSpan}> {error} </span>) || (warning && <span className={s.warningSpan}> {warning} </span>))}
    </div>
}

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            <div>
                <Field type={'email'} name={'email'}
                       component={renderField} placeholder={'Email'} validate={ [required, maxLength50] } />
            </div>
            <div>
                <Field type={'password'} name={'password'}
                       component={renderField}  placeholder={'Password'} validate={ [required, maxLength50] } />
            </div>
            <div>
                <label className={s.label}>

                    <Field class={s.checkbox} type={'checkbox'} name={'rememberMe'}
                           component={'input'} />

                    <span className={s.checkboxText}>
                        remember me
                    </span>

                </label>
            </div>
            <button className={s.button}>Login</button>

            {props.error?<div className={s.summaryError}>{props.error}</div>:null}
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm);