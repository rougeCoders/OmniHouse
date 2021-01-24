import AuthActionTypes from '../actionTypes/authActionTypes.js';

const INITIAL_STATE = {
    user:[],
    isAuth: false,
    userType: null,
    error: null
}

export default function AuthReducer(state= INITIAL_STATE, action){
    switch(action.type){
        case AuthActionTypes.AutherizeUser:
            return {...state, ...action.payload}
        case AuthActionTypes.LogoutUser:
            return {...state, user:[], userType: null, isAuth: false}
        case AuthActionTypes.ClearAuthError:
            return {...state, error: null }
        case AuthActionTypes.UpdateUserData:
            return {...state, ...action.payload }
        default:
            return state
    }
}