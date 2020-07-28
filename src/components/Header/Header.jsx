import React from 'react';
import s from './Header.module.scss';
import {NavLink, Redirect} from "react-router-dom";

const Header = (props) => {

    if (!props.authData.isAuth) return <Redirect to={'/login'}/>

    return <header className={s.header}>

        <div className={s.logo}>NoNameNetwork</div>

        <div className={s.loginBlock}>
            {props.authData.isAuth ?
                <NavLink to='/settings'>
                    <span className={s.login}>logged in as </span>
                    {props.authData.login?props.authData.login:null}
                </NavLink> :
                <NavLink to='/login'>login </NavLink>
            }
        </div>

        {props.authData.isAuth?
            <div onClick={props.logout} className={s.logout}>
                Logout
            </div> :
            null }
    </header>
}

export default Header;

