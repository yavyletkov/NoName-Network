import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {addPost, addMessage, updateNewPostText, subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}/>,
document.getElementById('root'));
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
