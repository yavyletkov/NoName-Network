
let defaultState = {
    usersData: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
};

let usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            let stateCopy = {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) return {...user, followStatus: !user.followStatus}
                    else return user
                })
            };
            return stateCopy
        }
        case 'SET-USERS': {
            return {...state, usersData: action.usersData, totalUsersCount: action.totalUsersCount}
        }
        case 'SET-PAGE': {
            return {...state, currentPage: action.page}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.status}
        }
        default: {
            return state;
        }
    }
}

export let followUser = (id) => {return {type: 'FOLLOW-USER', id: id}};
export let setUsers = (users, count) => {return {type: 'SET-USERS', usersData: users, totalUsersCount: count}};
export let setPage = (number) => {return {type: 'SET-PAGE', page: number}};
export let toggleIsFetching = (status) => {return {type: 'TOGGLE-IS-FETCHING', status: status}};

export default usersReducer;
