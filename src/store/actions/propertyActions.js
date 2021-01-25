import * as api from '../api/propertyApi.js';
import PropertyActionTypes from '../actionTypes/propertyActionTypes.js';

export const registerProperty = (values) => ({
    type: PropertyActionTypes.AddProperty,
    payload: api.registerProperty(values)
})