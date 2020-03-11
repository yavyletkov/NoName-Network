import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';




function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Nav />
                <Footer />

                <Route path='/profile' component={Profile} />
                <Route path='/dialogs' component={Dialogs} />
            </div>
        </BrowserRouter>
    );
}

export default App;
