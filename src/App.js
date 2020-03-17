import React from 'react';
import './App.css';
import store from './redux/state';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Nav state={props.store._state.nav}/>
                <Footer />

                <Route path='/profile' render={ () => <Profile
                        state={props.store.getState().profile}
                        addPost={props.store.addPost.bind(store)}
                        updateNewPostText={props.store.updateNewPostText.bind(store)} /> } />

                <Route path='/dialogs' render={ () => <Dialogs
                        state={props.store.getState().dialogs}
                        addMessage={props.store.addMessage.bind(store)}/> } />
            </div>
        </BrowserRouter>
    );
}

export default App;
