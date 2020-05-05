import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.authData
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
        case 'SET-IS-AUTH-TRUE': {
            return {
                ...state,
                isAuth: true,
            }
        }
        default:
            return state;
    }
};

export const getAuthData = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    return AuthAPI.me()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthData(response.data.id, response.data.email, response.data.login));
                dispatch(setIsAuthTrue());
            }
            else dispatch(setIsAuthFalse());
            dispatch(toggleIsFetching(false));
        })
};

export const login = (email, password, rememberMe) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    AuthAPI.login(email, password, rememberMe)
        .then(response => {

            if (response.resultCode === 0) {
                dispatch(getAuthData());
            }
            else {
                let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}));
                dispatch(toggleIsFetching(false));
            }
        })
};

export const logout = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    AuthAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthData(null, null, null));
                dispatch(setIsAuthFalse())
            }
            dispatch(toggleIsFetching(false));
        })
};


export let setAuthData = (userID, email, login) => {return {type: 'SET-AUTH-DATA', authData: {userID, email, login}}};
export let setIsAuthFalse = () => {return {type: 'SET-IS-AUTH-FALSE'}};
export let setIsAuthTrue = () => {return {type: 'SET-IS-AUTH-TRUE'}};

export let toggleIsFetching = (status) => {return {type: 'TOGGLE-IS-FETCHING', status: status}};

export default authReducer;
