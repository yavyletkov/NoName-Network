import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        authData: state.auth
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);



