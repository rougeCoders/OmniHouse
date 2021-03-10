import AddRaiseRequestActionTypes from '../actionTypes/addRaiseRequestActionTypes.js';

export const addRaiseRequestCategory = (values) => ({
    type: AddRaiseRequestActionTypes.AddRaiseRequestCategory,
    payload: values
})

export const addRaiseRequestCategoryImage = (values) => ({
    type: AddRaiseRequestActionTypes.AddRaiseRequestCategoryImage,
    payload: values
})

export const addRaiseRequestSubCategory = (values) => ({
    type: AddRaiseRequestActionTypes.AddRaiseRequestSubCategory,
    payload: values
})

export const addRaiseRequestImages = (values) => ({
    type: AddRaiseRequestActionTypes.AddRaiseRequestImages,
    payload: values
})

export const addRaiseRequestIssueDescription = (values) => ({
    type: AddRaiseRequestActionTypes.AddRaiseRequestIssueDescription,
    payload: values
})

export const saveRaisedIssueRequest = (values) => ({
    type: AddRaiseRequestActionTypes.SaveRaisedIssueRequest,
    payload: values
})


