import { combineReducers } from 'redux';
import AuthReducer from './authReducer.js';
import PropertyReducer from './propertyReducer.js';
import AddPropertyReducer from './addPropertyReducer.js';
import AddRaiseRequestReducer from './addRaiseRequestReducer.js';

const rootReducer = combineReducers({
    auth: AuthReducer,
    propDetails: PropertyReducer,
    addProperty: AddPropertyReducer,
    addRaiseRequest: AddRaiseRequestReducer
})

export default rootReducer;