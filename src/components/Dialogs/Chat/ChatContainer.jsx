import Chat from './Chat';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {sendMessage} from "../../../redux/dialogsReducer";

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogs.messagesData,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Chat);
