import React from "react";
import s from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";
import {Redirect} from "react-router-dom";
import Preloader from "../common/Preloader";

const Login = (props) => {

    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <>
            { props.isFetching === true ? <Preloader/> : null }
        <div className={s.loginWrapper}>
            <span>SIGN UP or SIGN IN</span>
            <div>
                https://social-network.samuraijs.com/login
            </div>

            <LoginForm onSubmit={onSubmit}/>

        </div>
        </>
    )
}

export default Login