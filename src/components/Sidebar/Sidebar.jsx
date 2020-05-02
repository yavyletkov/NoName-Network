import React from 'react';
import s from './Sidebar.module.css';
import NavbarFriendList from './NavbarFriendList/NavbarFriendList'
import {NavLink} from 'react-router-dom';

const Sidebar = (props) => {

    return <nav className={s.sidebar}>

        <div className={s.menu}>

            <NavLink className={s.menuItem} to={`/profile/${props.yourID}`} activeClassName={s.active}>
                Profile
            </NavLink>

            <NavLink className={s.menuItem} to='/dialogs' activeClassName={s.active}>
                Dialogs
            </NavLink>

            <NavLink className={s.menuItem} to='/feed' activeClassName={s.active}>
                Feed
            </NavLink>

            <NavLink className={s.menuItem} to='/users' activeClassName={s.active}>
                Users
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

export default Sidebar;
