import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import Preloader from "../common/Preloader";
import {toggleIsFetching} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {setUserInfo} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setUserInfo(response.data);
                this.props.toggleIsFetching(false);
            })
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
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleIsFetching: (status) => {
//             dispatch(toggleIsFetching(status))
//         },
//         setUserInfo: (userInfo) => {
//             dispatch(setUserInfo(userInfo))
//         }
//     }
// }


export default connect(mapStateToProps, {toggleIsFetching, setUserInfo})(withRouter(ProfileContainer))
