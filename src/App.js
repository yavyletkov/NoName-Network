import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/reduxStore";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Nav state={store.getState().nav}/>

                    <Route path='/profile'
                           render={() => <Profile />}/>

                    <Route path='/dialogs'
                           render={() => <Dialogs chatListData={store.getState().dialogs.chatListData}/>}/>

                    <Route path='/users'
                           render={() => <Users/>}/>

                    <Footer/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
