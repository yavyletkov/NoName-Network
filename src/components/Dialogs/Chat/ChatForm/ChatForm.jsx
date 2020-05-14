import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./ChatForm.module.css";

const ChatForm = (props) => {
    return <form className={s.chatForm} onSubmit={props.handleSubmit}>

        <span>
            <Field className={s.textInput} name={'messageText'} component={'input'} placeholder={'Your message'}/>
        </span>

        <button className={s.button}>Send</button>
    </form>
}

export default reduxForm({form: 'chat'})(ChatForm);