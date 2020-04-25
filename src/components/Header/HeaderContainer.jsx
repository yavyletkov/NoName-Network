import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import Preloader from "../common/Preloader";
import {withRouter} from "react-router-dom";
import {toggleIsFetching} from "../../redux/usersReducer";
import {setAuthData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthData(response.data.data.id, response.data.data.email, response.data.data.login);
                }
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        authData: state.auth
    }
}

export default connect(mapStateToProps, {setAuthData, toggleIsFetching})(HeaderContainer);



