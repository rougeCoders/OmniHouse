import AddPropertyActionTypes from '../actionTypes/addPropertyActionTypes.js';

const INITIAL_STATE = {
    address:{},
    propertyRentalDetails:{
        amount:'',
        frequency:'',
        billsIncluded:'',
        bills:[],
        isZeroDepositScheme:'',
        depositDuration:1,
    },
    isOccupied: false,
    hasMultipleOccupation:'',
    propertyType:'',
    propertyFurnishing:'',
    roomsDetails:[],
    isPropertyNotOccupied:'',
    propertyImages:[],
    propertyCertificates:[],
    addedAmenities:[],
    addedRooms: [
        {
            title:'Bedroom 1',
            type:'Bedroom',
            expanded:true
        },
        {
            title:'Bedroom 2',
            type:'Bedroom',
            expanded:false
        },
        {
            title:'Bathroom',
            type:'Bathroom',
            expanded:false
        },
        {
            title:'Living Room',
            type:'LivingRoom',
            expanded:false
        }
    ]
}

export default function AddPropertyReducer(state= INITIAL_STATE, action){
    console.log(action.type);
    console.log(action.payload);
    switch(action.type){
        case AddPropertyActionTypes.RegisterProperty:
            return {...state, ...action.payload}
        case AddPropertyActionTypes.AddPostCode:
            return {...state, address: action.payload}
        case AddPropertyActionTypes.AddPropertyAddress:
            return {...state, address: action.payload}
        case AddPropertyActionTypes.IsPropertyNotOccupied:
            return {...state, isPropertyNotOccupied: action.payload}
        case AddPropertyActionTypes.PropertyType:
            return {...state, ...action.payload}
        case AddPropertyActionTypes.PropertyFurnished:
            return {...state, propertyFurnishing: action.payload}
        case AddPropertyActionTypes.PropertyImages:
            const propertyUpdatedImages = [...state.propertyImages]
            propertyUpdatedImages.push(action.payload);
            return {...state, propertyImages: propertyUpdatedImages}
        case AddPropertyActionTypes.PropertyRentalDetails:
            return {...state, propertyRentalDetails: action.payload}
        case AddPropertyActionTypes.PropertyBillDetails:
            return {...state, propertyBillDetails: action.payload}
        case AddPropertyActionTypes.RoomsDetails:
            return {...state, roomsDetails: action.payload}
        case AddPropertyActionTypes.SecurityDepositDetails:
            return {...state, propertyBillDetails: action.payload}
        case AddPropertyActionTypes.PropertyCertificateDetails:
            const propertyCloneCertificates = [...state.propertyCertificates]
            propertyCloneCertificates.push(action.payload);
            return {...state, propertyCertificates: propertyCloneCertificates}
        case AddPropertyActionTypes.AddedRoomsDetails:
            return {...state, addedRooms: action.payload}
        case AddPropertyActionTypes.AddAmenities:
            const selectedAmenities = [...state.addedAmenities]
            const selectedAmenity = action.payload.selectedAmenity;
            const selectedAmenityKey = action.payload.selectedAmenityKey;
            const selectedParent = action.payload.parentKey;
            const selectedIndex= action.payload.index;

            const selectedSectionIndex = selectedAmenities.findIndex( item => item.key == selectedAmenityKey);
            if(selectedSectionIndex!= -1){
                const selectedRoom = selectedAmenities.find( item => item.key == selectedAmenityKey);
                if(selectedRoom[selectedParent]){
                    const foundIndex = selectedRoom[selectedParent].indexOf(selectedIndex);
                    if(foundIndex != -1){
                        selectedRoom[selectedParent].splice(foundIndex,1)
                    }else{
                        selectedRoom[selectedParent].push(selectedIndex);
                    }
                }else{
                    selectedRoom[selectedParent] = [selectedIndex]
                }
                selectedAmenities[selectedSectionIndex] = selectedRoom
            }else{
                const newAmenityType = {
                    title: selectedAmenity,
                    key: selectedAmenityKey,
                } 
                newAmenityType[selectedParent] = [selectedIndex];
                selectedAmenities.push(newAmenityType);
            }
            console.log(selectedAmenities);
            return {...state, addedAmenities: selectedAmenities}
        default:
            return state
    }
}