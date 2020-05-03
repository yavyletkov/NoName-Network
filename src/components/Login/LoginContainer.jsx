import {connect} from "react-redux";
import Login from "./Login";
import {login, logout} from "../../redux/authReducer";

const mstp = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
}

export default connect(mstp,{login, logout})(Login)

