import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {
    followUser,
    unFollowUser,
    setPage,
    toggleFollowingIsInProgress,
    getUsersThunkCreator,
    followThunkCreator,
    unFollowThunkCreator
} from "../../redux/usersReducer"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

// МЕТОДОМ SOME ДОБАВИТЬ ОТДЕЛЬНО ДИЗЕБЛЮЮЩИЕСЯ КНОПКИ ПОДПИСКИ


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
    }

    onPageClick = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.getUsersThunk(this.props.pageSize, pageNumber);
    }

    onFollowClick = (id) => {
        this.props.followThunk(id);
    }

    onUnFollowClick = (id) => {
        this.props.unFollowThunk(id);
    }

    render() {
        return <>
            { this.props.isFetching === true ? <Preloader/> : null }
            <Users onPageClick={ this.onPageClick }
                      onFollowClick={this.onFollowClick}
                      onUnFollowClick={this.onUnFollowClick}
                      usersData={ this.props.usersData }
                      pageSize={ this.props.pageSize }
                      totalUsersCount={ this.props.totalUsersCount}
                      currentPage={ this.props.currentPage }
                      followUser={ this.props.followUser}
                      unFollowUser={this.props.unFollowUser}
                      followingIsInProgress={this.props.followingIsInProgress}
                      inProgress={this.props.inProgress}
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
        followingIsInProgress: state.users.followingIsInProgress,
        inProgress: state.users.inProgress
    }
}

export default connect(mapStateToProps, {
    followUser, unFollowUser,
    setPage, toggleFollowingIsInProgress,
    getUsersThunk: getUsersThunkCreator,
    followThunk: followThunkCreator,
    unFollowThunk: unFollowThunkCreator})(withAuthRedirect(UsersContainer))


