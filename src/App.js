import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/reduxStore";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Sidebar state={store.getState().sidebar}/>

                    <Route path='/profile'
                           render={() => <ProfileContainer />}/>

                    <Route path='/dialogs'
                           render={() => <Dialogs chatListData={store.getState().dialogs.chatListData}/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Footer/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
