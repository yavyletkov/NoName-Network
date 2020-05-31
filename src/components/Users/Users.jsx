import s from "./Users.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";
import Pagination from "../common/Paginator/Pagination";

const Users = (props) => {

    return <div className={s.users}>

        <Pagination totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize} onPageChange={props.onPageChange}
                   currentPage={props.currentPage} urlPrefix={'users'}/>

        <div className={s.usersWrapper}>


            {props.usersData.map(item => {
                return <div key={item.id} className={s.userCard}>

                    <NavLink to={'/profile/' + item.id}>
                        <img className={s.ava}
                             alt={item.name}
                             src={item.photos.large ? item.photos.large : 'https://www.nelson-chambers.co.uk/front/images/default-user.jpg'}/>
                    </NavLink>

                    <div className={s.cardBody}>

                        <div className={s.name}> {item.name} </div>
                        <div className={s.id}> id: {item.id} </div>
                    </div>

                    <div className={s.followFooter}>
                        {item.followed ?
                            <button
                                disabled={props.followingIsInProgress && props.inProgress.some(a => a === item.id)}
                                onClick={() => props.onUnFollowClick(item.id)}>
                                UNFOLLOW
                            </button> :
                            <button
                                disabled={props.followingIsInProgress && props.inProgress.some(a => a === item.id)}
                                onClick={() => props.onFollowClick(item.id)}>
                                FOLLOW
                            </button>
                        }
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default Users;