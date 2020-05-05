import React from 'react';
import preloader from "../../assets/images/preloader.svg";

let styles = [{
    position: 'fixed',
    top: '20%',
    left: '50%',
    transform: 'scale(1.2)',
},
{
    position: 'fixed',
    top: '50vh',
    left: '50vh'
},
{
    position: 'absolute',
    transform: 'scale(0.2)'
}
]

const Preloader = (props) => {
    return <img style={props.id?styles[props.id]:styles[0]} src={preloader} alt={'preloader'}/>
}

export default Preloader;
