import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.menuItem}><a href='/profile'>Профиль</a></div>
        <div className={s.menuItem}><a href='/dialogs'>Сообщения</a></div>
        <div className={s.menuItem}><a href='/feed'>Новости</a></div>
        <div className={s.menuItem}><a href='/music'>Музыка</a></div>
        <div className={s.menuItem}><a href='/settings'>Настройки</a></div>
    </nav>
}

export default Nav;
