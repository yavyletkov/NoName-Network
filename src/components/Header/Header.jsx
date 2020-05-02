import React from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}>ya sdelal</div>
        <div className={s.loginBlock}>
            {props.authData.isAuth ?
                <NavLink to='/settings'>
                    <span className={s.login}>logged as </span>
                    {props.authData.login}
                </NavLink> :
                <NavLink to='/login'>login </NavLink>
            }
        </div>
    </header>
}

export default Header;

