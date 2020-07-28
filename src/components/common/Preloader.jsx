import React from 'react';
import preloader from "../../assets/images/preloader.svg";
import s from './Preloader.module.css'

const Preloader = (props) => {

    return <div className={s.wrapper}>
        <img className={s.preloader} src={preloader} alt={'preloader'}/>
    </div>
}

export default Preloader;
