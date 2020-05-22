import React, {useState} from 'react';
import s from './Sidebar.module.css';
import NavbarFriendList from './NavbarFriendList/NavbarFriendList'
import {NavLink} from 'react-router-dom'


const Sidebar = (props) => {

    let MenuItem = ({to, pageName, icon}) => {
        let [active, setActive] = useState(false)
        let showLabel = () => setActive(true);
        let hideLabel = () => setActive(false);

        return <div className={s.menuItem}>
            { active ? <span className={s.text}>{pageName}</span> : null}
            <NavLink onMouseOver={showLabel} onMouseOut={hideLabel} className={s.icon} to={'/' + to} activeClassName={s.active}>
                <i className={s.materialIcons}>{icon}</i>
            </NavLink>
        </div>
    }


    return <nav className={s.sidebar}>

        <div className={s.menu}>

            <MenuItem to={'profile'} pageName={'Profile'} icon={'person'}/>

            <MenuItem to={'dialogs'} pageName={'Dialogs'} icon={'chat'}/>

            <MenuItem to={'feed'} pageName={'Feed'} icon={'view_agenda'}/>

            <MenuItem to={'users'} pageName={'Users'} icon={'group'}/>

            <MenuItem to={'music'} pageName={'Music'} icon={'audiotrack'}/>

            <MenuItem to={'settings'} pageName={'Settings'} icon={'settings'}/>

        </div>

        <NavbarFriendList friendsData={props.state.friendsData}/>

    </nav>
}

export default Sidebar;
