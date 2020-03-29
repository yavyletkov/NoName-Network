import React from 'react';
import './App.css';
import store from './redux/store';

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
                <Nav state={props.store.getState().nav}/>
                <Footer />

                <Route path='/profile' render={ () => <Profile
                        profileState={props.store.getState().profile}
                        dispatch={props.store.dispatch.bind(store)} /> } />

                <Route path='/dialogs' render={ () => <Dialogs
                        dialogsState={props.store.getState().dialogs}
                        dispatch={props.store.dispatch.bind(store)} /> } />
            </div>
        </BrowserRouter>
    );
}

export default App;
