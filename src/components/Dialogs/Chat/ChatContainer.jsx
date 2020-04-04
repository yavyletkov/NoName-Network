import Chat from './Chat';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogs.messagesData,
        newMessageText: state.dialogs.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (symbol) => {
            dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', text: symbol});
        },
        sendMessage: () => {
            dispatch({type: 'SEND-MESSAGE'});
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);


export default ChatContainer;
