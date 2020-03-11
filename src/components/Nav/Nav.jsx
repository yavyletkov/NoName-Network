import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
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

        <div className={s.menuItem} activeClassName={s.active}>
            <NavLink to='/music'>Музыка</NavLink>
        </div>

        <div className={s.menuItem}>
            <NavLink to='/settings'>Настройки</NavLink>
        </div>

    </nav>
}

export default Nav;
