import {
    profileAPI
} from '../API/API'

let initstate = {
    posts: [{
            post: 'nuynpes der porcnakan e ',
            id: 0,
            like: 0
        },
        {
            post: 'ays ej@ ',
            id: 1,
            like: 0
        },
        
    ],
    aboutme: "",

    contacs: {

    },
    status: "",
    lookingForAJob: undefined,
    lookingForAJobDescription: undefined,
    fullName: undefined,
    userId: undefined,
    photos: {

    }


}

const addpost = "profile/ADD-POST"
const deletepost = "profile/DELETE-POST"
const Setprofile = "profile/SET-PROFILE"
const changeUSerid = "profile/CHANGE-USERID"
const SetStatus = "profile/SET-STATUS"

const profileReducer = (state = initstate, action) => {

    window.prof = state

    switch (action.type) {

        case addpost: {
            let massi = {
                post: action.data,
                id: state.posts.length,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, massi],
            }
        }

        case changeUSerid: {
            return {
                ...state
            }
        }

        case SetStatus: {
            return {
                ...state,
                status: action.status
            }
        }



        case deletepost: {

            return {
                ...state,
                posts: state.posts.filter(ob => ob.id !== action.id)

            }
        }

        case Setprofile: {
            return {
                ...state,
                /*posts:[

                ] */

                contacs: {
                    ...action.profile.contacts
                },
                aboutme: action.profile.aboutMe,
                lookingForAJob: action.profile.lookingForAJob,
                lookingForAJobDescription: action.profile.lookingForAJobDescription,
                fullName: action.profile.fullName,
                userId: action.profile.userId,
                photos: {
                    ...action.profile.photos
                }

            }



        }

        default:
            return state

    }

}

export function add(text) {
    return {
        type: addpost,
        data: text
    }
}

export function setprofile(profile) {
    return {
        type: Setprofile,
        profile
    }
}

export function chUserId(userID) {
    return {
        type: changeUSerid,
        userID
    }
}

export function setStatus(status) {
    return {
        type: SetStatus,
        status
    }
}

export function deletePost(id) {
    return {
        type: deletepost,
        id
    }
}

export const getProfile = (id) => {



    return async (dispatch) => {

        let Profile = await profileAPI.GetProfile(id)

        dispatch(setprofile(Profile))



    }
}

export const GetStatus = (id) => {



    return async (dispatch) => {

        let status = await profileAPI.GetStatus(id)

        dispatch(setStatus(status))



    }
}

export const setstatus = (status) => {



    return (dispatch) => {

        profileAPI.UpdStatus(status)
            .then((data) => {
                dispatch(setStatus(status))

            })

    }
}

//
export default profileReducer






/* if(action.type==='ADD-POST'){
        let massi={post:state.posttext,like:0};
        state.posts.push(massi);
        state.posttext='';
    ;
    }
    else if(action.type==='UPD-POST-TEXT'){
        state.posttext=action.data
    
    }*/







/* {post:'esor mers merav(((',like:'1000', id:0},
 {post:'ognec inc avarayri chacakramtum',like:'13', id:1},
 {post:'ova mers',like:'30', id:2},
 {post:'erek miyuk dara',like:'999999999', id:3},
 {post:'es esor kerel em hacik',like:'12', id:4} */