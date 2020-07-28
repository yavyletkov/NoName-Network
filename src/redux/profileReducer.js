import {ProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let defaultState = {
    postsData: [
        {id: 1, text: 'Первый пост'},
        {
            id: 2,
            text: 'Я тебе скажу, безделье - это игрушка дьявола, это во-первых. Во-вторых, занимайтесь спортом, не надо там по углам курить, шабить, дрочить, мастурбировать, что конечно многие одно и то же, есть жи, просто безделье - это игрушка дьявола, я повторяюсь ежи ну весь мир будет против меня я прав ежи я вдохновляюсь этим ежи а так пацаны голову не теряйте во первых и всех благ вам?'
        },
        {id: 3, text: 'ебомоный обэма блядь'},
        {
            id: 4,
            text: 'Я в своём познании настолько преисполнился, что как будто бы уже 100 триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, понимаешь?'
        },
    ],
    isFetching: false,
    userID: '',
    userStatus: '',
    userInfo: {
        aboutMe: null,
        contacts: {},
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {small: '', large: ''},
        userId: null
    }
}

let profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            if (action.postText) {
                let stateCopy = {
                    ...state,
                    postsData: [
                        ...state.postsData,
                        {
                            id: state.postsData[state.postsData.length-1].id + 1,
                            text: action.postText
                        }
                        ],
                };
                return stateCopy;
            } else return state;
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.status}
        }
        case 'SET-USER-INFO': {
            if (action.withoutPhotos) {
                let photos = state.userInfo.photos;
                return {...state, userInfo: {...action.userInfo, photos}}
            }
            return {...state, userInfo: {...action.userInfo}}
        }
        case 'SET-USER-ID': {
            return {...state, userID: action.userID}
        }
        case 'SET-USER-STATUS': {
            return {...state, userStatus: action.userStatus}
        }
        case 'SET-NEW-USER-PHOTOS': {
            return {...state, userInfo: {...state.userInfo, photos: action.photos}}
        }
        default: {
            return state;
        }
    }
}

export const getProfile = (id) => (dispatch) => {
    if (!id) id = 7340;
    dispatch(setUserID(id));
    dispatch(toggleIsFetching(true));

    ProfileAPI.getProfile(id)
        .then(response => {
            dispatch(setUserInfo(response));
            dispatch(toggleIsFetching(false));

        })
}

export const getUserStatus = (id) => (dispatch) => {
    if (id) {
        ProfileAPI.getUserStatus(id)
        .then(response => {
            debugger
            if (response) {
                if (!response.resultCode) {
                    dispatch(setUserStatus(response))
                }
                else alert(response.messages[0])
            }
            else dispatch(setUserStatus(''))
        })
    }

}

export const updateUserStatus = (userStatus) => (dispatch) => {
    ProfileAPI.updateUserStatus(userStatus)
        .then(response => {
            if (!response.resultCode) {
                dispatch(setUserStatus(userStatus))
            }
            else alert(response.messages[0])
        })
}

export const updateUserPhoto = (file) => (dispatch) => {
    ProfileAPI.updateUserPhoto(file)
        .then(response => {
            if (!response.resultCode) {
                dispatch(setNewUserPhotos(response.data.photos));
            }
            else alert(response.messages[0])
        })
}

export const updateUserInfo = (userInfo) => (dispatch) => {
    return ProfileAPI.updateUserInfo(userInfo)
        .then(response => {
            if (!response.resultCode) {
                dispatch(setUserInfo(userInfo, true));
            }
            else {
                let message = response.messages.length > 0 ? response.messages[0] : 'some error';
                dispatch(stopSubmit('userInfo', {_error: message}));
                alert(response.messages[0])
                return Promise.reject(response.messages[0])
            }
        })
}

export let setUserInfo = (userInfo, withoutPhotos) => {return {type: 'SET-USER-INFO', userInfo: userInfo, withoutPhotos: withoutPhotos}};
export let addPost = (postText) => {return {type: 'ADD-POST', postText: postText}};
export let toggleIsFetching = (status) => {return {type: 'TOGGLE-IS-FETCHING', status: status}};
export let setUserStatus = (userStatus) => {return {type: 'SET-USER-STATUS', userStatus: userStatus}};
export let setUserID = (userID) => {return {type: 'SET-USER-ID', userID: userID}};
export let setNewUserPhotos = (photos) => {return {type: 'SET-NEW-USER-PHOTOS', photos}};

export default profileReducer;


// education form for fmor // ЭТО НАПИСАЛА МОЯ ЖЕНА СО СЛОВАМИ "СЕЙЧАС Я ТЕБЕ ВСЁ ПОЧИНЮ"
//                    enother
// else
//     if (do begin a:w-3;)
//         program server
// stert to program server
// do {
//     run
// }

