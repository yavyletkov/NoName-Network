let rerenderEntireTree;

let state = {
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
};

export const addPost = () => {
    let newPost = {id: 5, text: state.profile.newPostText};
    state.profile.postsData.push(newPost);
    state.profile.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (text) => {
    state.profile.newPostText = text;
    rerenderEntireTree(state);
}

export const addMessage = (text) => {
    let newMessage = {id: 5, text: text};
    state.dialogs.messagesData.push(newMessage);
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
} // "импортнули" ререндер их индекс.жс

export default state;
