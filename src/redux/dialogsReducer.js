let defaultState = {
    messagesData: [
        {id: 1, text: 'Привет'},
        {id: 2, text: 'Че как сам?'},
        {id: 3, text: 'Ой всё'},
        {id: 4, text: 'Пока, урод'},
    ],
    newMessageText: 'хуй',
    chatListData: [
        {id: 1, name: 'Нина', surname: 'Иванова'},
        {id: 2, name: 'Петя', surname: 'Васин'},
        {id: 3, name: 'Жора', surname: 'Кириллов'},
        {id: 4, name: 'Вера', surname: 'Димова'},
        {id: 5, name: 'Таня', surname: 'Танина'},
    ],
};

let dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {

            if (state.newMessageText) {
                let stateCopy = {
                    ...state,
                    messagesData: [
                        ...state.messagesData,
                        {
                            id: state.messagesData[state.messagesData.length-1].id + 1,
                            text: state.newMessageText
                        }
                    ],
                    newMessageText: ''
                };
                return stateCopy;
            } else return state;
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            let stateCopy = {
                ...state,
                newMessageText: action.text
            };
            return stateCopy;
        }
        default:
            return state;
    }
};

export default dialogsReducer;
