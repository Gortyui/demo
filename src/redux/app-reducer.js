import {
    getAuth
} from './auth-reducer'

let initstate = {
    initelized: false,
    api_key:''
}

const setinitelized = 'app/SET-INITELIZED'
const setapikey='app/SET-APIKEY'
global.Api_Key=''
const appReducer = (state = initstate, action) => {

    switch (action.type) {

        case setinitelized: {
            return {
                ...state,
                initelized: true
            }
        }
 
        case setapikey:{
            return{
...state,api_key:action.api_key
            }
        }

        default:
            return state

    }

}

function SetInit() {
    return {
        type: setinitelized
    }
}

function Setapi_Key(api_key) {
    return {
        type: setapikey,
        api_key
    }
}

 export const GetApi_Key = () => {

    return  (dispatch,getState) => {
let user= getState().auth.login

let key=JSON.parse(localStorage.getItem('Gorik"s site api-key'))[user]  
global.Api_Key=key
dispatch(Setapi_Key(key))
}
}

export const SetApi_Key = (text) => {

    return (dispatch,getState) => {
        let user= getState().auth.login

    let obj=JSON.parse(localStorage.getItem('Gorik"s site api-key'))   
      let  obj1={...obj}
     obj1[user]=text
localStorage.setItem('Gorik"s site api-key',JSON.stringify(obj1))  

dispatch(GetApi_Key())
}
}


export const SetInitelizedThunk = () => {



    return (dispatch) => {
        let getAuthP = dispatch(getAuth())


        Promise.all([getAuthP]).then(() => {
            if(localStorage.getItem('Gorik"s site api-key')==null){localStorage.setItem('Gorik"s site api-key',JSON.stringify({}))}
            
            dispatch(SetInit())
        })

    }

}


export default appReducer