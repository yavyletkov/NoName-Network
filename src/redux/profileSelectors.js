export getIsFetchingProfile = (state) => {
    return state.profile.isFetching
}

export getUserInfo = (state) => {
    return state.profile.userInfo
}

export getuUserStatus = (state) => {
    return state.profile.userStatus
}

export getAuthorizedUserID = (state) => {
    return Number(state.auth.userID)
}

export getUserID = (state) => {
    return Number(state.profile.userID)
}