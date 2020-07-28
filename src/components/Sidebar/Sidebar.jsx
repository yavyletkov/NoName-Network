import React, {useState} from 'react';
import s from './Sidebar.module.css';
import NavbarFriendList from './NavbarFriendList/NavbarFriendList'
import {NavLink} from 'react-router-dom';
import profile from '../../assets/images/baseline_person_black_18dp.png';
import dialogs from '../../assets/images/baseline_chat_black_18dp.png';
import feed from '../../assets/images/baseline_view_agenda_black_18dp.png';
import users from '../../assets/images/baseline_group_black_18dp.png';
import music from '../../assets/images/baseline_audiotrack_black_18dp.png';
import settings from '../../assets/images/baseline_settings_black_18dp.png';

const Sidebar = (props) => {

    let MenuItem = ({to, pageName, icon}) => {
        let [active, setActive] = useState(false)

        return <div className={s.menuItem}>
            { active ? <span className={s.text}>{pageName}</span> : null}
            <NavLink onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className={s.icon} to={'/' + to} activeClassName={s.active}>
                <img src={icon} alt=''/>
            </NavLink>
        </div>
    }


    return <nav className={s.sidebar}>

        <div className={s.menu}>

            <MenuItem to={'profile'} pageName={'Profile'} icon={profile}/>

            <MenuItem to={'dialogs'} pageName={'Dialogs'} icon={dialogs}/>

            <MenuItem to={'feed'} pageName={'Feed'} icon={feed}/>

            <MenuItem to={'users'} pageName={'Users'} icon={users}/>

            <MenuItem to={'music'} pageName={'Music'} icon={music}/>

            <MenuItem to={'settings'} pageName={'Settings'} icon={settings}/>

        </div>

        <NavbarFriendList friendsData={props.state.friendsData}/>

    </nav>
}

export default Sidebar;
