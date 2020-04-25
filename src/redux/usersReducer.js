import {UsersAPI} from "../api/api";

let defaultState = {
    usersData: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsInProgress: false,
};


let usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) return {...user, followed: true}
                    else return user
                })
            }
        }
        case 'UNFOLLOW-USER': {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) return {...user, followed: false}
                    else return user
                })
            }
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
        case 'TOGGLE-FOLLOWING-IS-IN-PROGRESS': {
            return {...state, followingIsInProgress: action.status}
        }
        default: {
            return state;
        }
    }
}

export const getUsersThunkCreator = (pageSize, currentPage) => (dispatch) => {
    dispatch(toggleIsFetching(true));

    UsersAPI.getUsers(pageSize, currentPage)
        .then(response => {
            dispatch(setUsers(response.items, response.totalCount));
            dispatch(toggleIsFetching(false));
        })
};

export const unFollowThunkCreator = (id) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(toggleFollowingIsInProgress(true));

    UsersAPI.unFollow(id)
        .then(response => {
            !response.resultCode ? dispatch(unFollowUser(id)) : alert('ошибка')
            dispatch(toggleIsFetching(false));
            dispatch(toggleFollowingIsInProgress(false));

        })
};

export const followThunkCreator = (id) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(toggleFollowingIsInProgress(true));

    UsersAPI.follow(id)
        .then(response => {
            !response.resultCode ? dispatch(followUser(id)) : alert('ошибка')
            dispatch(toggleIsFetching(false));
            dispatch(toggleFollowingIsInProgress(false));

        })
};

export let followUser = (id) => {return {type: 'FOLLOW-USER', id: id}};
export let unFollowUser = (id) => {return {type: 'UNFOLLOW-USER', id: id}};
export let setUsers = (users, count) => {return {type: 'SET-USERS', usersData: users, totalUsersCount: count}};
export let setPage = (number) => {return {type: 'SET-PAGE', page: number}};
export let toggleIsFetching = (status) => {return {type: 'TOGGLE-IS-FETCHING', status: status}};
export let toggleFollowingIsInProgress = (status) => {return {type: 'TOGGLE-FOLLOWING-IS-IN-PROGRESS', status: status}};

export default usersReducer;
