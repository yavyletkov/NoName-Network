import React, {useState} from 'react';
import s from './Sidebar.module.css';
import NavbarFriendList from './NavbarFriendList/NavbarFriendList'
import {NavLink} from 'react-router-dom'
import profileIcon from '../../assets/images/icons/profile.png'
import dialogIcon from '../../assets/images/icons/dialog.png'
import feedIcon from '../../assets/images/icons/thunder.png'
import usersIcon from '../../assets/images/icons/users.png'
import musicIcon from '../../assets/images/icons/play.png'
import settingsIcon from '../../assets/images/icons/lock.png'


const Sidebar = (props) => {

    let MenuItem = ({to, pageName, icon}) => {
        let [active, setActive] = useState(false)
        let activate = () => setActive(true);
        let deActivate = () => setActive(false);

        return (
            <NavLink onMouseOver={activate} onMouseOut={deActivate} className={s.menuItem} to={'/' + to} activeClassName={s.active}>
                { active ? <span className={s.text}>{pageName}</span> : null}
                <img className={s.icon} src={icon} alt={icon}/>
            </NavLink>
        )
    }


    return <nav className={s.sidebar}>

        <div className={s.menu}>

            <MenuItem to={'profile'} pageName={'Profile'} icon={profileIcon}/>

            <MenuItem to={'dialogs'} pageName={'Dialogs'} icon={dialogIcon}/>

            <MenuItem to={'feed'} pageName={'Feed'} icon={feedIcon}/>

            <MenuItem to={'users'} pageName={'Users'} icon={usersIcon}/>

            <MenuItem to={'music'} pageName={'Music'} icon={musicIcon}/>

            <MenuItem to={'settings'} pageName={'Settings'} icon={settingsIcon}/>

        </div>

        <NavbarFriendList friendsData={props.state.friendsData}/>

    </nav>
}

export default Sidebar;
