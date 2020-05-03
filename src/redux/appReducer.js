import {getAuthData} from "./authReducer";

let defaultState = {
    isInitialized: false
};

let appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'INITIALIZATION-SUCCESSFUL': {
            return {...state,
                isInitialized: true}
        }

        default:
            return state;
    }
};

export let initializationSuccessful = () => { return { type: 'INITIALIZATION-SUCCESSFUL' } };

export let initializeApp = () => (dispatch) => {
    debugger
    Promise.all([ dispatch(getAuthData()) ])
        .then( () => {
            debugger
            dispatch(initializationSuccessful())
        } )
}

export default appReducer;
