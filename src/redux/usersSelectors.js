export const getUsersData = (state) => {
    return state.users.usersData
}
export const getPageSize = (state) => {
    return state.users.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.users.currentPage
}
export const getIsFetchingUsers = (state) => {
    return state.users.isFetching
}
export const getFollowingIsInProgress = (state) => {
    return state.users.followingIsInProgress
}

export const getInProgress = (state) => {
    return state.users.inProgress
}