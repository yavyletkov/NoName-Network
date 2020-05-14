import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
    return {
        authorizedUserID: state.auth.userID,
        state: state.sidebar
    }
}

export default connect(mapStateToProps)(Sidebar);