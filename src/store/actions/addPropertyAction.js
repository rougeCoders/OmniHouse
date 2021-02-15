import AddPropertyActionTypes from '../actionTypes/addPropertyActionTypes.js';

export const addPostcode = (values) => ({
    type: AddPropertyActionTypes.AddPostCode,
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

export const addRoomsDetails = (values) => ({
    type: AddPropertyActionTypes.RoomsDetails,
    payload: values
})

export const securityDepositDetails = (values) => ({
    type: AddPropertyActionTypes.SecurityDepositDetails,
    payload: values
})

export const addPropertyCertificateDetails = (values) => ({
    type: AddPropertyActionTypes.PropertyCertificateDetails,
    payload: values
})

export const addedRoomDetails = (values) => ({
    type: AddPropertyActionTypes.AddedRoomsDetails,
    payload: values
})

export const addAmenities = (values) => ({
    type: AddPropertyActionTypes.AddAmenities,
    payload: values
})