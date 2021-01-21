import * as api from '../api/authApi.js';
import AuthActionTypes from '../actionTypes/authActionTypes.js';

export const registerUser = (values) => ({
    type: AuthActionTypes.AutherizeUser,
    payload: api.registerUser(values)
})

export const loginUser = (values) => ({
    type: AuthActionTypes.AutherizeUser,
    payload: api.loginUser(values)
})

export const autoSignIn = () => ({
    type: AuthActionTypes.AutherizeUser,
    payload: api.autoSignIn()
})

export const logoutUser = () => ({
    type: AuthActionTypes.LogoutUser,
    payload: api.logoutUser()
})

export const updateUserData = (values,user) => ({
    type: AuthActionTypes.UpdateUserData,
    payload: api.updateUserData(values,user)
})

export const clearAuthError = () => ({
    type: AuthActionTypes.ClearAuthError
})