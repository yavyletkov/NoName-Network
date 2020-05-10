import s from "./Users.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    return <div className={s.users}>

        <Paginator totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize} onPageClick={props.onPageClick} currentPage={props.currentPage}/>

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