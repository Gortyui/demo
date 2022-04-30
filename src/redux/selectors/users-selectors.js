import {
    createSelector
} from "reselect"



const GetUsersStateUsers = (state) => {
    return state.userspage.users
}



export const GetUsersStatePageSize = (state) => {
    return state.userspage.pageSize
}


export const GetUsersStateCurrentPage = (state) => {
    return state.userspage.currentpage
}

export const GetUsersStateTotalUsersCount = (state) => {
    return state.userspage.totalUserCount
}

export const GetUsersStateisFetching = (state) => {
    return state.userspage.isFetching
}

export const GetUsersStateFollowingInProgres = (state) => {
    return state.userspage.FollowingInProgres
}

export const GetUsersStatePagePortion = (state) => {
    return state.userspage.portion
}



export const GetUsersStateUsersSuper = createSelector([GetUsersStateUsers, GetUsersStatePageSize], (users, pagesize) => {
    console.log(pagesize)
    return [...users]
})