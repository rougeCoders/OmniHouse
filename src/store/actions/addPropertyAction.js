import AddPropertyActionTypes from '../actionTypes/addPropertyActionTypes.js';

export const addPincode = (values) => ({
    type: AddPropertyActionTypes.AddPinCode,
    payload: values
})

export const addPropertyAddress = (values) => ({
    type: AddPropertyActionTypes.AddPropertyAddress,
    payload: values
})

export const isPropertyNotOccupied = (values) => ({
    type: AddPropertyActionTypes.IsPropertyNotOccupied,
    payload: values
})

export const typeOfProperty = (values) => ({
    type: AddPropertyActionTypes.PropertyType,
    payload: values
})

export const propertyFurnished = (values) => ({
    type: AddPropertyActionTypes.PropertyFurnished,
    payload: values
})

export const addPropertyImages = (values) => ({
    type: AddPropertyActionTypes.PropertyImages,
    payload: values
})

export const addPropertyRentalDetails = (values) => ({
    type: AddPropertyActionTypes.PropertyRentalDetails,
    payload: values
})

export const addPropertyBillDetails = (values) => ({
    type: AddPropertyActionTypes.PropertyBillDetails,
    payload: values
})

export const securityDepositDetails = (values) => ({
    type: AddPropertyActionTypes.SecurityDepositDetails,
    payload: values
})