let store = {

    _state: {
        profile: {
            postsData: [
                {id: 1, text: 'Первый пост'},
                {id: 2, text: 'Как поживаете, мрази?'},
                {id: 3, text: '#яхороший #красава я сегодня выебал бомжа'},
                {id: 4, text: 'Я хз что я могу вам сказать еще'},
            ],
            newPostText: '',
        },
        dialogs: {
            messagesData: [
                {id: 1, text: 'Привет'},
                {id: 2, text: 'Че как сам?'},
                {id: 3, text: 'Ой всё'},
                {id: 4, text: 'Пока, урод'},
            ],
            chatListData: [
                {id: 1, name: 'Нина', surname: 'Иванова'},
                {id: 2, name: 'Петя', surname: 'Васин'},
                {id: 3, name: 'Жора', surname: 'Кириллов'},
                {id: 4, name: 'Вера', surname: 'Димова'},
                {id: 5, name: 'Таня', surname: 'Танина'},
            ],
        },
        nav: {
            friendsData: [
                {id: 1, name: 'Нина', surname: 'Иванова'},
                {id: 2, name: 'Вася', surname: 'Васин'},
                {id: 3, name: 'Жора', surname: 'Кириллов'},
                {id: 4, name: 'Вера', surname: 'Димова'},
                {id: 5, name: 'Таня', surname: 'Танина'},
            ]
        }
    },

    getState() {return this._state},

    _callSubscriber() { },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {id: 5, text: this._state.profile.newPostText};
        this._state.profile.postsData.push(newPost);
        this._state.profile.newPostText = '';
        this._callSubscriber(this); // !!!!!!!!!!!!!!????????
    },

    updateNewPostText(text) {
        this._state.profile.newPostText = text;
        this._callSubscriber(this);
    },

    addMessage(text) {
        let newMessage = {id: 5, text: text};
        this._state.dialogs.messagesData.push(newMessage);
        this._callSubscriber(this);
    },

};

export default store;
