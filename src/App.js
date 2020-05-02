import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import Login from "./components/Login/Login"
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/reduxStore";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <HeaderContainer />

                    <SidebarContainer/>

                    <Route path='/profile/:userID?'
                           render={() => <ProfileContainer />}/>

                    <Route path='/dialogs'
                           render={() => <Dialogs chatListData={store.getState().dialogs.chatListData}/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <Login/>}/>

                    <Footer/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
