import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import {connect, Provider} from "react-redux";
import store from "./redux/reduxStore";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Preloader from "./components/common/Preloader";
import {initializeApp} from "./redux/appReducer";
import {withSuspense} from "./hoc/withSuspense";
// import UsersContainer from "./components/Users/UsersContainer";
// import Footer from "./components/Footer/Footer";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer')); // Ленивая загрузка


class App extends React.Component {

    catchAllUnhandledErrors = () => {
        alert('Some error occured :(')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledRejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledRejection', this.catchAllUnhandledErrors)
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

                        <Route exact path='/'
                               render={() => <Redirect to={'/profile'}/>}/>

                        <Route path='/profile/:userID?'
                               render={() => <ProfileContainer />}/>

                        <Route path='/dialogs'
                               render={() => <Dialogs chatListData={store.getState().dialogs.chatListData}/>}/>

                        <Route path='/users/:page?'
                               render={withSuspense(UsersContainer)}/>

                        <Route path='/login'
                               render={() => <LoginContainer/>}/>

                        <Route exact path='*'
                               render={() => <div style={{'color': '#6c6c6c', 'text-align': 'center', 'font-size': '17px', 'margin-top': '10px'}}>
                                   <b>404 <br/>PAGE DOES NOT EXIST</b>
                               </div>}/>



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
