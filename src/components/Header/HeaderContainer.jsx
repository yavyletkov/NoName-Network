import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthData, setAuthData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthData()
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

export default connect(mapStateToProps, {setAuthData, getAuthData})(HeaderContainer);



