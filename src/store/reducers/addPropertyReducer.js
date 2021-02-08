import AddPropertyActionTypes from '../actionTypes/addPropertyActionTypes.js';

const INITIAL_STATE = {
    pincode:'',
    address:{},
    isPropertyNotOccupied:'',
    propertyType:'',
    propertyFurnished:'',
    propertyImages:[],
    propertyRentalDetails:{}
}

export default function AddPropertyReducer(state= INITIAL_STATE, action){
    console.log(action.type);
    console.log(action.payload);
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
            const propertyUpdatedImages = [...state.propertyImages]
            propertyUpdatedImages.push(action.payload);
            console.log(state.propertyImages);
            return {...state, propertyImages: propertyUpdatedImages}
        case AddPropertyActionTypes.PropertyRentalDetails:
            return {...state, propertyRentalDetails: action.payload}
        case AddPropertyActionTypes.PropertyBillDetails:
            return {...state, propertyBillDetails: action.payload}
        case AddPropertyActionTypes.SecurityDepositDetails:
            return {...state, propertyBillDetails: action.payload}
        default:
            return state
    }
}