import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./PostForm.module.css";

const PostForm = (props) => {
    return <form className={s.postForm} onSubmit={props.handleSubmit}>

        <div>
            <Field class={s.textInput} component={'input'} placeholder={`What's up, dude?`} name={'postText'}/>
        </div>

        <button className={s.button}>Make post!</button>
    </form>
}

export default reduxForm({form: 'post'})(PostForm)