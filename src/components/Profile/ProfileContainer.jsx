import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import Preloader from "../common/Preloader";
import {toggleIsFetching} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {setUserInfo} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserInfo(response.data);
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        console.log('пропсы', this.props)
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

export default connect(mapStateToProps, {toggleIsFetching, setUserInfo})(ProfileContainer)
