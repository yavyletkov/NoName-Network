import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./PostForm.module.css";

const renderField = ({type, placeholder, name}) => {
    return <div>
        <input className={s.textInput} type={type} name={name} placeholder={placeholder} />
    </div>
}

const PostForm = (props) => {

    return <form className={s.postForm} onSubmit={props.handleSubmit}>

        <div>
            <Field component={renderField} type={'text'} placeholder={`What's up, dude?`} name={'postText'} />
        </div>

        <button className={s.button}>Tell!</button>
    </form>
};

export default reduxForm({form: 'post'})(PostForm)