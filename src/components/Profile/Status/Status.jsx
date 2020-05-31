import React from "react";
import s from "./Status.module.scss"
import Preloader from "../../common/Preloader";

class Status extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.userStatus,
        isFetching: false
    };

    componentDidMount() {
        this.props.getUserStatus(this.props.id)
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.getUserStatus(this.props.id)
        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({
                userStatus: this.props.userStatus
            })
        }
        if (prevProps.id !== this.props.id) {
            this.props.getUserStatus(this.props.id)
        }
    }

    activateEditMode = () => {
        if (this.props.id === this.props.authorizedUserID) {
            this.setState(
                {editMode: true}
            )
        }
    }

    deactivateEditMode = () => {
        this.props.updateUserStatus(this.state.userStatus)
        this.setState(
            {editMode: false}
        );
    }

    // onSaveButtonClick = () => {
    //     this.props.updateUserStatus(this.state.userStatus)
    // }

    onUserStatusChange = (e) => {
        this.setState({userStatus: e.currentTarget.value})
        // console.log('добавил символ в статус')
    }

    render() {

        return (
            <>
                {this.state.isFetching ? <Preloader id={2}/> :
                <div className={s.statusWrapper}>
                    { !this.state.editMode ?
                        <div onClick={this.activateEditMode}>
                            <span> {this.props.userStatus ?
                                <><span>{this.props.userStatus}</span><span>{this.props.id===this.props.authorizedUserID?<span className={s.clickToChange}>click to change</span>:null}</span></> :
                                <span className={s.noStatus}>{this.props.id===this.props.authorizedUserID?'no status (click to change)':'no status'}</span>} </span>
                            {  }
                        </div> :
                        <div>
                            <input onChange={this.onUserStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.userStatus}/>
                        </div> }
                </div> }
            </>
        )

        // return (
        //     <div className={s.statusWrapper}>
        //         { !this.state.editMode ? <span onClick={this.activateEditMode}> {this.props.userStatus} </span> :
        //         <div>
        //             <input onChange={this.onUserStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.userStatus}/>
        //         </div> }
        //     </div>
        // )
    }
}

export default Status;