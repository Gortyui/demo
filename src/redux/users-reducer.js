import {
    userAPI
} from '../API/API'


let initstate = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentpage: 1,
    isFetching: false,
    FollowingInProgres: [],
    portion:5
}


const Set_current_page = "users/SET-CURRENT-PAGE"
const Follow = 'users/FOLLOW'
const Unfollow = 'users/UNFOLLOW'
const Setuser = 'users/SET-USERS'
const SetTotalUsersCount = 'users/SET-TOTAL-USER-COUNT'
const TogalIsFetching = 'users/TOGAL-IS-FETCHING'
const TogalIsFollowingProgres = 'users/TOGAL-IS-FOLLOWING'

function followLogic (items, follow, id){
 return   items.map(

        (u) => {

            if (u.id === id) {
                return {
                    ...u,
                    followed: follow
                }

            }

            return u

        }
    )
}




const userreducer = (state = initstate, action) => {



    switch (action.type) {

        case Follow:
            return {
                ...state,

                users:followLogic(state.users,true,action.userid)

            }

            case Unfollow:
                return {

                    ...state,
                    users:followLogic(state.users,false,action.userid)
                }

                case Setuser:
                    return {
                        ...state, users: [...action.users]
                    }

                    case Set_current_page:
                        return {
                            ...state, currentpage: action.currentpage
                        }

                        case SetTotalUsersCount:

                            return {
                                ...state, totalUserCount: action.usercount
                            }


                            case TogalIsFetching:
                                return {
                                    ...state, isFetching: action.isFetching
                                }

                                case TogalIsFollowingProgres: {

                                    return {
                                        ...state,
                                        FollowingInProgres: action.isFollowing ? state.FollowingInProgres.concat([action.id]) :
                                            state.FollowingInProgres.filter(el => el !== action.id)
                                    }
                                }

                                default:
                                    return state

    }

}


export function follow(userid) {
    return {
        type: Follow,
        userid
    }
}

export function unfollow(userid) {
    return {
        type: Unfollow,
        userid
    }
}

export function setusers(users) {
    return {
        type: Setuser,
        users
    }
}

export function setcurrentpage(currentpage) {
    return {
        type: Set_current_page,
        currentpage
    }
}

export function setusertotalcount(usercount) {
    return {
        type: SetTotalUsersCount,
        usercount
    }
}

export function togalIsFetching(isFetching) {
    return {
        type: TogalIsFetching,
        isFetching
    }
}

export function togalIsfollowingprogres(isFollowing, id) {
    return {
        type: TogalIsFollowingProgres,
        isFollowing,
        id
    }
}


export const getUsersThunkCreator = (currentpage, pageSize) => {

    return async (dispatch) => {

        dispatch(togalIsFetching(true))
        let page = await userAPI.GetPage(currentpage, pageSize)
        dispatch(togalIsFetching(false))
        dispatch(setusers(page.items));
        dispatch(setusertotalcount(page.totalCount))

    }
}

export const changeUsersThunkCreator = (currentpage) => {

    return (dispatch) => {

        dispatch(setcurrentpage(currentpage));
    }
}

export const followUsersThunkCreator = (id, isfollow) => {



    return async (dispatch) => {
        dispatch(togalIsfollowingprogres(true, id));

        let fol = isfollow ? await userAPI.Follow(id) : await userAPI.UnFollow(id)

        dispatch(togalIsfollowingprogres(false, id))
        if (fol.resultCode === 0) {

            isfollow ? dispatch(follow(id)) : dispatch(unfollow(id))
        }




    }
}



export default userreducer










/*
     if(action.type==='UPD-MASSAGE-TEXT'){
        state.massagetext=action.data
  
    }
    else if(action.type==='ADD-MASAGE'){
        let massi={massage:state.massagetext,yuy:true,id:4};
        state.massages.push(massi);
        state.massagetext='';
     ;
    }*/