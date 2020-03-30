import React from 'react';
import s from './Nav.module.css';
import NavbarFriendList from './NavbarFriendList/NavbarFriendList'
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return <nav className={s.nav}>

        <div className={s.menu}>

            <NavLink className={s.menuItem} to='/profile' activeClassName={s.active}>
                Profile
            </NavLink>

            <NavLink className={s.menuItem} to='/dialogs' activeClassName={s.active}>
                Dialogs
            </NavLink>

            <NavLink className={s.menuItem} to='/feed' activeClassName={s.active}>
                Feed
            </NavLink>

            <NavLink className={s.menuItem} to='/music' activeClassName={s.active}>
                Music
            </NavLink>

            <NavLink className={s.menuItem} to='/settings' activeClassName={s.active}>
                Settings
            </NavLink>
        </div>

        <NavbarFriendList friendsData={props.state.friendsData}/>

    </nav>
}

export default Nav;
