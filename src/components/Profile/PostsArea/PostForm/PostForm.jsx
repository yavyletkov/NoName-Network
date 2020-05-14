import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./PostForm.module.css";

const PostForm = (props) => {
    return <form className={s.postForm} onSubmit={props.handleSubmit}>

        <span>
            <Field className={s.textInput} name={'postText'} component={'input'} placeholder={`What's up, dude?`}/>
        </span>

        <button className={s.button}>Send</button>
    </form>
}

export default reduxForm({form: 'post'})(PostForm)