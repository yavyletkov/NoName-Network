import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {
    console.log(props);
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Nav state={props.state.nav}/>
                <Footer />

                <Route path='/profile' render={ () => <Profile state={props.state.profile}/> } />
                <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogs}/> } />
            </div>
        </BrowserRouter>
    );
}

export default App;
