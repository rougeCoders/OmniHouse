import { combineReducers } from 'redux';
import AuthReducer from './authReducer.js';
import PropertyReducer from './propertyReducer.js';

const rootReducer = combineReducers({
    auth: AuthReducer,
    propDetails: PropertyReducer
})

export default rootReducer;