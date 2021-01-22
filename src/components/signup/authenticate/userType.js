import React, { useState, useEffect } from 'react';
import { View } from "react-native";
import { firebase } from './../../../firebase/firebase.js';
import { Text, Button } from 'react-native-elements';
import constants from './../../../constants.js';
import { useDispatch } from 'react-redux';
import showToast from './../../../utils/showToast.js';
import { addUserType, clearAuthError } from './../../../store/actions/authActions.js';

const RegisterUserType = (props) => {

    const dispatch = useDispatch();

    const updateUserType = (userType) => {
        dispatch(addUserType(userType, props.route.params.user)).then(({payload})=>{
            if(payload.error){
                showToast('error','Ups !!','Try again later');
            } else {
                showToast('success','Congratulations','Your profile was updated');
            }
        });
    }

    return(
        <>
        <View>
            <Text h4>Are you a</Text>
            <Button title={constants.Labels.Landlord} onPress={() => updateUserType(constants.UserTypeLandlord)} />
            <Button title={constants.Labels.Tenant} onPress={() => updateUserType(constants.UserTypeTenant)} />
        </View>
        <View>
            <Button title='Finish' />
        </View>
        </>
    )
}

export default RegisterUserType;