import PropertyActionTypes from '../actionTypes/propertyActionTypes.js';

const INITIAL_STATE = {
    property:{},
}

export default function PropertyReducer(state= INITIAL_STATE, action){
    switch(action.type){
        case PropertyActionTypes.AddProperty:
            return {...state, ...action.payload}
        default:
            return state
    }
}