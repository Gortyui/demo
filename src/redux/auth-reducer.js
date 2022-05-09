import {
    headerAPI,
    loginAPI
} from '../API/API'
import { GetApi_Key } from './app-reducer'

let initstate = {
    id: undefined,
    login: "",
    email: "",
    isauth: false,
    loginStatus: undefined,
    captcha:""
    
}

const setuserdata = 'auth/SET-USER-DATA'
const setauth = 'auth/SET-AUTH'
const setloginstatus = 'auth/SET-LOGIN-STATUS'
const setcaptcha='auth/SET-CAPTCHA'


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

            case setcaptcha:{
                return {
                    ...state,
                    captcha:action.captcha
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

export function SetCaptcha(captcha) {
    return {
        type: setcaptcha,
        captcha
    }
}




/*function Login() {
    return {type:login}
}

function LogOut() {
    return {type:logout}
}*/

export const GetCapcha = () => {

    return async (dispatch) => {
       
let captcha= await loginAPI.getCaptcha();

dispatch(SetCaptcha(captcha.url))
}
}



export const getAuth = () => {

    return async (dispatch) => {

        let authP = headerAPI.GetAuth()
        let auth = await authP
        if (auth.resultCode === 0) {
            dispatch(SetAuth()) 
            dispatch(SetUserData(auth.data))

            console.log(auth.data)


        }
        authP.then(()=>{dispatch(GetApi_Key())  })

        return authP

    }

}

export const SetLogin = (login, email, password, rememberMe,captcha=null ) => {

    return async (dispatch) => {



        if (login) {
            

            let login =await  loginAPI.Login(email, password, rememberMe, captcha)
            dispatch(GetCapcha()) 
            if (login.data.resultCode === 0) {
                dispatch(getAuth());
                dispatch(SetAuth())
            }
            dispatch(SetLoginStatus(login.data.resultCode))

        } else {
            
            let login = await loginAPI.LogOut()
            if (login.data.resultCode === 0){
                dispatch(getAuth())
                dispatch(SetAuth(false))
            }
            dispatch(SetLoginStatus(login.data.resultCode))

        }
    }


}



export default authReducer