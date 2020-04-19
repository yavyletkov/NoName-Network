import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {followUser, setUsers, setPage, toggleIsFetching} from "../../redux/usersReducer"

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    onPageClick = (number) => {
        this.props.toggleIsFetching(true);
        this.props.setPage(number);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${number}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount)
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        return <>
            { this.props.isFetching === true ? <Preloader/> : null }
            <Users onPageClick={ this.onPageClick }
                      usersData={ this.props.usersData }
                      pageSize={ this.props.pageSize }
                      totalUsersCount={ this.props.totalUsersCount}
                      currentPage={ this.props.currentPage }
                      followUser={ this.props.followUser}
                      isFetching={this.props.isFetching }
            />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         followUser: (id) => {
//             dispatch(followUser(id));
//         },
//         setUsers: (users, count) => {
//             dispatch(setUsers(users, count))
//         },
//         setPage: (number) => {
//             dispatch(setPage(number))
//         },
//         toggleIsFetching: (status) => {
//             dispatch(toggleIsFetching(status))
//         }
//     }
// }


export default connect(mapStateToProps, {followUser, setUsers, setPage, toggleIsFetching})(UsersContainer)


