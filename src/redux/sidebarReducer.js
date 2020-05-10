let defaultState = {
    friendsData: [
        {id: 1, name: 'Нина', surname: 'Иванова'},
        {id: 2, name: 'Вася', surname: 'Васин'},
    ],
};

let SidebarReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default SidebarReducer;
