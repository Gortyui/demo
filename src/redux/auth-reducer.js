import {
    headerAPI,
    loginAPI
} from '../API/API'

let initstate = {
    id: undefined,
    login: "",
    email: "",
    isauth: false,
    loginStatus: undefined
}

const setuserdata = 'auth/SET-USER-DATA'
const setauth = 'auth/SET-AUTH'
const setloginstatus = 'auth/SET-LOGIN-STATUS'
/*const login='LOGIN'
const logout='LOG-OUT'*/

const authReducer = (state = initstate, action) => {

    switch (action.type) {

        case setuserdata:
            return {
                ...state,
                ...action.data,


            }
            case setauth: {
                return {
                    ...state,
                    isauth: action.auth
                }
            }

            case setloginstatus: {
                return {
                    ...state,
                    loginStatus: action.status
                }
            }


            default:
                return state

    }

}

export function SetUserData(data) {
    return {
        type: setuserdata,
        data
    }
}
export function SetLoginStatus(status) {
    return {
        type: setloginstatus,
        status
    }
}
export function SetAuth(auth = true) {
    return {
        type: setauth,
        auth
    }
}


/*function Login() {
    return {type:login}
}

function LogOut() {
    return {type:logout}
}*/



export const getAuth = () => {

    return async (dispatch) => {

        let authP = headerAPI.GetAuth()
        let auth = await authP

        if (auth.resultCode === 0) {
            dispatch(SetAuth())
            dispatch(SetUserData(auth.data))
            console.log(auth.data)


        }

        return authP

    }

}

export const SetLogin = (login, email, password, rememberMe, ) => {

    return async (dispatch) => {
        if (login) {
            let login = await loginAPI.Login(email, password, rememberMe)
            if (login.data.resultCode === 0) {
                dispatch(getAuth());
                dispatch(SetAuth())
            }
            dispatch(SetLoginStatus(login.data.resultCode))

        } else {

            let login = await loginAPI.LogOut()
            if (login.data.resultCode === 0) {

                dispatch(getAuth());
                dispatch(SetAuth(false))
            }
            dispatch(SetLoginStatus(login.data.resultCode))

        }
    }


}




export default authReducer