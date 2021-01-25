import { firebase, propertiesCollection } from '../../firebase/firebase.js';

export const registerProperty = async(details) =>{
    try{
        var propertyDetails = {
            details,
        }
        var response = await propertiesCollection.add(propertyDetails);
        return { response }
    }catch(error){
        return { error: error.code }
    }
}