let defaultState = {
    userID: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
};

let authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET-AUTH-DATA': {
            return {
                ...state,
                ...action.authData,
                isAuth: true,
            }
        }
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state,
                isFetching: action.status,
            }
        }
        default:
            return state;
    }
};

export let setAuthData = (userID, email, login) => {return {type: 'SET-AUTH-DATA', authData: {userID, email, login}}};

export default authReducer;
