import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";




function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Footer />
            <Dialogs />
        </div>
    );
}

export default App;
