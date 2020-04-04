import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navReducer from './navReducer';


let store = {

    _state: {
        profile: {
            postsData: [
                {id: 1, text: 'Первый пост'},
                {id: 2, text: 'Я тебе скажу, безделье - это игрушка дьявола, это во-первых. Во-вторых, занимайтесь спортом, не надо там по углам курить, шабить, дрочить, мастурбировать, что конечно многие одно и то же, есть жи, просто безделье - это игрушка дьявола, я повторяюсь ежи ну весь мир будет против меня я прав ежи я вдохновляюсь этим ежи а так пацаны голову не теряйте во первых и всех благ вам?'},
                {id: 3, text: '#красава я насрал на стол'},
                {id: 4, text: 'Я в своём познании настолько преисполнился, что как будто бы уже 100 триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, понимаешь?'},
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
            newMessageText: 'хуй',
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
    _callSubscriber() { },

    getState() {return this._state},

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.nav = navReducer(this._state.nav, action);
        this._callSubscriber(store);
    }

};

export default store;
