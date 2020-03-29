let defaultState = {
    friendsData: [
        {id: 1, name: 'Нина', surname: 'Иванова'},
        {id: 2, name: 'Вася', surname: 'Васин'},
        {id: 3, name: 'Жора', surname: 'Кириллов'},
        {id: 4, name: 'Вера', surname: 'Димова'},
        {id: 5, name: 'Таня', surname: 'Танина'},
    ],
};

let navReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default navReducer;
