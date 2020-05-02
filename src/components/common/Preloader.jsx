import React from 'react';
import preloader from "../../assets/images/preloader.svg";

let styles = {
    position: 'fixed',
    top: '20%',
    left: '50%',
    transform: 'scale(1.2)',

}
const Preloader = () => {
    return <img style={styles} src={preloader} alt={'preloader'}/>
}

export default Preloader;
