import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {
    followUser,
    unFollowUser,
    setPage,
    toggleFollowingIsInProgress,
    requestUsers,
    requestFollow,
    requestUnFollow
} from "../../redux/usersReducer"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingIsInProgress, getInProgress,
    getIsFetchingUsers,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../redux/usersSelectors";

// МЕТОДОМ SOME ДОБАВИТЬ ОТДЕЛЬНО ДИЗЕБЛЮЮЩИЕСЯ КНОПКИ ПОДПИСКИ


class UsersContainer extends React.Component {
    componentDidMount() {
        let page = this.props.match.params.page ? this.props.match.params.page : this.props.currentPage;
        this.props.setPage(page);
        this.props.requestUsers(this.props.pageSize, page)
    }

    onPageChange = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.requestUsers(this.props.pageSize, pageNumber);
    }

    onFollowClick = (id) => {
        this.props.requestFollow(id);
    }

    onUnFollowClick = (id) => {
        this.props.requestUnFollow(id);
    }

    render() {

        return <>
            { this.props.isFetching === true ? <Preloader/> : null }
            <Users onPageChange={ this.onPageChange }
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
                      setPage={this.props.setPage}
            />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetchingUsers(state),
        followingIsInProgress: getFollowingIsInProgress(state),
        inProgress: getInProgress(state)
    }
}

export default connect(mapStateToProps, {
    followUser, unFollowUser,
    setPage, toggleFollowingIsInProgress,
    requestUsers, requestFollow, requestUnFollow
})(withAuthRedirect(UsersContainer))


