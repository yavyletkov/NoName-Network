import React from "react";
import s from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {

    let onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={s.loginWrapper}>
            <span>SIGN UP or SIGN IN</span>
            <div>
                https://social-network.samuraijs.com/login
            </div>
e
            <LoginForm onSubmit={onSubmit}/>

        </div>
    )
}

export default Login