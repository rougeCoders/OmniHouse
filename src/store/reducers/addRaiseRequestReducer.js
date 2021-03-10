import AddRaiseRequestActionTypes from '../actionTypes/addRaiseRequestActionTypes.js';

const INITIAL_STATE = {
    raiseRequestCategoryType:'',
    raiseRequestCategoryTypeImage:{

    },
    raiseRequestCategorySubType:'',
    raiseRequestImages:[],
    raiseRequestIssueDescription:''
}

export default function AddRaiseRequestReducer(state= INITIAL_STATE, action){
    console.log(action.type);
    console.log(action.payload);
    switch(action.type){
        case AddRaiseRequestActionTypes.AddRaiseRequestCategory:
            return {...state, raiseRequestCategoryType: action.payload}
        case AddRaiseRequestActionTypes.AddRaiseRequestSubCategory:
            return {...state, raiseRequestCategorySubType: action.payload}
        case AddRaiseRequestActionTypes.AddRaiseRequestCategoryImage:
            return {...state, raiseRequestCategoryTypeImage: action.payload}
        case AddRaiseRequestActionTypes.AddRaiseRequestIssueDescription:
            return {...state, raiseRequestIssueDescription: action.payload}   
        case AddRaiseRequestActionTypes.SaveRaisedIssueRequest:
                return {...state, raiseRequestIssueDescription: action.payload}
        case AddRaiseRequestActionTypes.AddRaiseRequestImages:
            const raiseRequestUpdatedImages = [...state.raiseRequestImages]
            raiseRequestUpdatedImages.push(action.payload);
            return {...state, raiseRequestImages: raiseRequestUpdatedImages}
        default:
            return state
    }
}