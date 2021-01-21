import { combineReducers } from 'redux';
import AuthReducer from './authReducer.js';

const rootReducer = combineReducers({
    auth: AuthReducer
})

export default rootReducer;