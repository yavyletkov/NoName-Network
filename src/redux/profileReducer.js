let defaultState = {
    postsData: [
        {id: 1, text: 'Первый пост'},
        {id: 2, text: 'Я тебе скажу, безделье - это игрушка дьявола, это во-первых. Во-вторых, занимайтесь спортом, не надо там по углам курить, шабить, дрочить, мастурбировать, что конечно многие одно и то же, есть жи, просто безделье - это игрушка дьявола, я повторяюсь ежи ну весь мир будет против меня я прав ежи я вдохновляюсь этим ежи а так пацаны голову не теряйте во первых и всех благ вам?'},
        {id: 3, text: '#красава я насрал на стол'},
        {id: 4, text: 'Я в своём познании настолько преисполнился, что как будто бы уже 100 триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, понимаешь?'},
    ],
    newPostText: '',
    isFetching: false,
};

let profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            if (state.newPostText) {
                let stateCopy = {
                    ...state,
                    postsData: [
                        ...state.postsData,
                        {
                            id: state.postsData[state.postsData.length-1].id + 1,
                            text: state.newPostText
                        }
                        ],
                        newPostText: '',
                };
                return stateCopy;
            } else return state;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {
                ...state,
                newPostText: action.text,
            }
            return stateCopy;
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.status}
        }
        case 'SET-USER-INFO': {
            return {...state, userInfo: action.userInfo}
        }
        default: {
            return state;
        }
    }
}

export let setUserInfo = (userInfo) => {return {type: 'SET-USER-INFO', userInfo: userInfo}};
export let addPost = () => {return {type: 'ADD-POST'}};
export let updateNewPostText = (text) => {return {type: 'UPDATE-NEW-POST-TEXT', text: text}};


export default profileReducer;
