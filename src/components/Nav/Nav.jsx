import React from 'react';
import s from './Nav.module.css';
import NavbarFriendList from './NavbarFriendList/NavbarFriendList'
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return <nav className={s.nav}>

        <div className={s.menuItem}>
            <NavLink to='/profile' activeClassName={s.active}>Профиль</NavLink>
        </div>

        <div className={s.menuItem}>
            <NavLink to='/dialogs' activeClassName={s.active}>Сообщения</NavLink>
        </div>

        <div className={s.menuItem}>
            <NavLink to='/feed' activeClassName={s.active}>Новости</NavLink>
        </div>

        <div className={s.menuItem}>
            <NavLink to='/music' activeClassName={s.active}>Музыка</NavLink>
        </div>

        <div className={s.menuItem}>
            <NavLink to='/settings' activeClassName={s.active}>Настройки</NavLink>
        </div>

        <NavbarFriendList friendsData={props.state.friendsData}/>

    </nav>
}

export default Nav;
