import React from 'react';
import s from './Nav.module.css';
import NavbarFriendList from './NavbarFriendList/NavbarFriendList'
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return <nav className={s.nav}>

        <div className={s.menu}>
            <div className={s.menuItem}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>

            <div className={s.menuItem}>
                <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
            </div>

            <div className={s.menuItem}>
                <NavLink to='/feed' activeClassName={s.active}>Feed</NavLink>
            </div>

            <div className={s.menuItem}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>

            <div className={s.menuItem}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
        </div>

        <NavbarFriendList friendsData={props.state.friendsData}/>

    </nav>
}

export default Nav;
