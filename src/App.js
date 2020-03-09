import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";




function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Main />
            <Footer />
            <span>пиз</span>
        </div>
    );
}

export default App;
