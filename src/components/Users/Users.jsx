import s from "./Users.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.users}>

        <div className={s.pages}>
            {pages.map(item => {
                return <span key={item} onClick={ () => props.onPageClick(item) } className={props.currentPage === item ? s.activePage : s.page}> {item} </span>
            })}
        </div>

        {props.usersData.map(item => {
            return <div key={item.id} className={s.userCard}>

                <NavLink to={'/profile/'+item.id}>
                    <img className={s.ava}
                         alt={item.name}
                         src={item.photos.small ? item.photos.small : 'https://www.nelson-chambers.co.uk/front/images/default-user.jpg'}/>
                </NavLink>
                <NavLink to={'/profile/'+item.id}>
                    <div className={s.name}> {item.name} </div>
                </NavLink>



                <div className={s.id}> id: {item.id} </div>

                { item.followed ?
                    <button disabled={props.followingIsInProgress && props.inProgress.some(a => a === item.id)} className={s.followBtn} onClick={() => props.onUnFollowClick(item.id)}>
                        unfollow
                    </button> :
                    <button disabled={props.followingIsInProgress && props.inProgress.some(a => a === item.id)} className={s.followBtn} onClick={() => props.onFollowClick(item.id)}>
                        follow
                    </button>
                }
            </div>
        })}

    </div>
}

export default Users;