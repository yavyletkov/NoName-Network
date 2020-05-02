import React from "react";
import s from "./Status.module.scss"

class Status extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.userStatus
    };

    componentDidMount() {
        this.props.getUserStatus(this.props.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({
                userStatus: this.props.userStatus
            })
        }
    }

    activateEditMode = () => {
        debugger
        if (this.props.id === this.props.yourID) {
            this.setState(
                {editMode: true}
            )
        }
    }

    deactivateEditMode = () => {
        this.setState(
            {editMode: false}
        );
    }

    onSaveButtonClick = () => {
        this.props.updateUserStatus(this.state.userStatus)
    }

    onUserStatusChange = (e) => {
        this.setState({userStatus: e.currentTarget.value})
        console.log('добавил символ в статус')
    }

    render() {

        return (
            <div className={s.statusWrapper}>
                { !this.state.editMode ?
                    <div onClick={this.activateEditMode}>
                        <span> {this.props.userStatus ?
                            <><span>{this.props.userStatus}</span><span>{this.props.id===this.props.yourID?<span className={s.clickToChange}>click to change</span>:null}</span></> :
                            <span className={s.noStatus}>{this.props.id===this.props.yourID?'no status (click to change)':'no status'}</span>} </span>
                        {  }
                    </div> :
                    <div>
                        <input onChange={this.onUserStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.userStatus}/>
                        <button onClick={this.onSaveButtonClick}> Save </button>
                    </div> }
            </div>
        )
    }
}

export default Status;