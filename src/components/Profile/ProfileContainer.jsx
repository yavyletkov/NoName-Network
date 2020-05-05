import React from "react";
import Profile from "./Profile";
import Preloader from "../common/Preloader";
import {connect} from "react-redux";
import {getProfile, setUserInfo, toggleIsFetching, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.userID;
        if (!id) {
            id = this.props.yourID;
        }
        this.props.getProfile(id);
    }

    render() {
        return <>
            { this.props.isFetching === true ? <Preloader/> : null }
            <Profile {...this.props} />
            </>
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.profile.isFetching,
        userInfo: state.profile.userInfo,
        userStatus: state.profile.userStatus,
        yourID: Number(state.auth.userID),
        id: Number(state.profile.userID)
    }
}

export default compose(
    connect(mapStateToProps, {
        toggleIsFetching, setUserInfo, getProfile, getUserStatus, updateUserStatus
    }),
    withRouter,
)(ProfileContainer)
