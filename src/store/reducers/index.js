import { combineReducers } from 'redux';
import AuthReducer from './authReducer.js';
import PropertyReducer from './propertyReducer.js';
import AddPropertyReducer from './addPropertyReducer.js';

const rootReducer = combineReducers({
    auth: AuthReducer,
    propDetails: PropertyReducer,
    addProperty: AddPropertyReducer
})

export default rootReducer;