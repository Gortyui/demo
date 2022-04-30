import {
    getAuth
} from './auth-reducer'

let initstate = {
    initelized: false
}

const setinitelized = 'app/SET-INITELIZED'

const appReducer = (state = initstate, action) => {

    switch (action.type) {

        case setinitelized: {
            return {
                ...state,
                initelized: true
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


export const SetInitelizedThunk = () => {



    return (dispatch) => {
        let getAuthP = dispatch(getAuth())


        Promise.all([getAuthP]).then(() => {
            dispatch(SetInit())
        })

    }

}


export default appReducer