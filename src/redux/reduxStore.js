import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navReducer from './navReducer';


let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    nav: navReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
