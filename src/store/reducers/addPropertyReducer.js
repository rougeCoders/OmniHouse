import { act } from 'react-test-renderer';
import AddPropertyActionTypes from '../actionTypes/addPropertyActionTypes.js';

const INITIAL_STATE = {
    pincode:'',
    address:{},
    isPropertyNotOccupied:'',
    propertyType:'',
    propertyFurnished:'',
    propertyImages:[]
}

export default function AddPropertyReducer(state= INITIAL_STATE, action){
    console.log(action.type);
    console.log(action.payload);
    console.log('ChiragTest');
    switch(action.type){
        case AddPropertyActionTypes.AddPinCode:
            return {...state, pincode: action.payload}
        case AddPropertyActionTypes.AddPropertyAddress:
            return {...state, address: action.payload}
        case AddPropertyActionTypes.IsPropertyNotOccupied:
            return {...state, isPropertyNotOccupied: action.payload}
        case AddPropertyActionTypes.PropertyType:
            return {...state, propertyType: action.payload}
        case AddPropertyActionTypes.PropertyFurnished:
            return {...state, propertyFurnished: action.payload}
        case AddPropertyActionTypes.PropertyImages:
            console.log("Chiragw3ewTerst");
            console.log(state);
            const propertyUpdatedImages = [...state.propertyImages];
            propertyUpdatedImages.push(action.payload);
            console.log("Chirag");
            console.log(propertyUpdatedImages);
            return {...state, propertyImages: propertyUpdatedImages}
        default:
            return state
    }
}