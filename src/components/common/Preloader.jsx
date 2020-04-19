import React from 'react';
import preloader from "../../assets/images/preloader.svg";

let styles = {
    position: 'absolute',
    top: '20%',
    left: '50%',
}
const Preloader = () => {
    return <img style={styles} src={preloader} alt={'preloader'}/>
}

export default Preloader;
