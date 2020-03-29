let defaultState = {
    postsData: [
        {id: 1, text: 'Первый пост'},
        {id: 2, text: 'Я тебе скажу, безделье - это игрушка дьявола, это во-первых. Во-вторых, занимайтесь спортом, не надо там по углам курить, шабить, дрочить, мастурбировать, что конечно многие одно и то же, есть жи, просто безделье - это игрушка дьявола, я повторяюсь ежи ну весь мир будет против меня я прав ежи я вдохновляюсь этим ежи а так пацаны голову не теряйте во первых и всех благ вам?'},
        {id: 3, text: '#красава я насрал на стол'},
        {id: 4, text: 'Я в своём познании настолько преисполнился, что как будто бы уже 100 триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, понимаешь?'},
    ],
    newPostText: '',
};

let profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                text: state.newPostText
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export default profileReducer;
