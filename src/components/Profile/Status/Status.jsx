import React, {useState, useEffect} from "react";
import s from "./Status.module.scss"

const Status = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [userStatus, setUserStatus] = useState(props.userStatus);
    let [isFetching, setIsFetching] = useState(false);

    const activateEditMode = () => {
        if (props.id === props.authorizedUserID) {
            setEditMode(true)
        }
    }

    useEffect( () => {
        props.getUserStatus(props.id);
        setUserStatus(props.userStatus)
    }, [props.userStatus, props.id])

    const deactivateEditMode = () => {
        props.updateUserStatus(userStatus);
        setEditMode(false);
    }

    const onUserStatusChange = (e) => {
        debugger
        setUserStatus(e.currentTarget.value)
    }

    return <div className={s.statusWrapper}>
        {!editMode ?
            <div onClick={activateEditMode}>
                            <span> {props.userStatus ?
                                <><span>{props.userStatus}</span><span>{props.id === props.authorizedUserID ?
                                    <span className={s.clickToChange}>click to change</span> : null}</span></> :
                                <span
                                    className={s.noStatus}>{props.id === props.authorizedUserID ? 'no status (click to change)' : 'no status'}</span>} </span>
                {}
            </div> :
            <div>
                <input onChange={onUserStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={userStatus}/>
            </div>}
    </div>
}


export default Status;