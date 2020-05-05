import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
// import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route} from 'react-router-dom';
import {connect, Provider} from "react-redux";
import store from "./redux/reduxStore";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Preloader from "./components/common/Preloader";
import {initializeApp} from "./redux/appReducer";


class App extends React.Component {

    componentDidMount() {

        this.props.initializeApp()
    }

    render () {
        if (!this.props.isInitialized)
            return <Preloader />
        else return (
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
                               render={() => <LoginContainer/>}/>

                        {/*<Footer/>*/}
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

const mstp = (state) => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default connect(mstp, {initializeApp} )(App);
