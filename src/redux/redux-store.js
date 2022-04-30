import { applyMiddleware, combineReducers, createStore,compose  } from "redux";
import thunkMiddleware from 'redux-thunk'

import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import friendsreducer from './friends-reducer'
import userreducer from "./users-reducer";
import authReducer from "./auth-reducer";
import VidReducer from "./yourFace";
import appReducer from "./app-reducer";



let reducers = combineReducers({
    yourp:profileReducer,
    dialogs:dialogsReducer,
    yourF:friendsreducer,
    userspage:userreducer,
    auth:authReducer,
    vid:VidReducer,
    app:appReducer
})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunkMiddleware)))


//let store = createStore(reducers,applyMiddleware(thunkMiddleware))
export default store

