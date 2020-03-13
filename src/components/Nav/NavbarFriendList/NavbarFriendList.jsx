import React from 'react';
import s from './NavbarFriendList.module.css';
import FriendPreview from './FriendPreview/FriendPreview'

const NavbarFriendList = (props) => {

    let friendList = props.friendsData.map(item =>
    <FriendPreview key={item.id} id={item.id} name={item.name} />);

    return <div className={s.container}>
        <h2>Friends</h2>
        <div className={s.navbarFriendList}>{friendList}</div>
    </div>
}

export default NavbarFriendList;
