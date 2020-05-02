import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./LoginForm.module.scss";

const LoginForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            <div>
                <Field class={s.textInput} name={'login'} component={'input'} placeholder={'Login'}/>
            </div>
            <div>
                <Field class={s.textInput} name={'password'} component={'input'} type={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <label className={s.label}>
                    <Field class={s.checkbox} name={'rememberMe'} component={'input'} type={'checkbox'}/>
                    <span className={s.checkboxText}>
                        remember me
                    </span>
                </label>
            </div>
            <button className={s.button}>Login</button>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm);