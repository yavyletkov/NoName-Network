import {AuthAPI} from "../api/api";

let defaultState = {
    userID: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: true,
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
        case 'SET-IS-AUTH-FALSE': {
            return {
                ...state,
                isAuth: false,
            }
        }
        default:
            return state;
    }
};

export const getAuthData = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    AuthAPI.me()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthData(response.data.id, response.data.email, response.data.login));
            }
            else dispatch(setIsAuthFalse());
            dispatch(toggleIsFetching(false));
        })
};

export let setAuthData = (userID, email, login) => {return {type: 'SET-AUTH-DATA', authData: {userID, email, login}}};
export let setIsAuthFalse = () => {return {type: 'SET-IS-AUTH-FALSE'}};
export let toggleIsFetching = (status) => {return {type: 'TOGGLE-IS-FETCHING', status: status}};

export default authReducer;
