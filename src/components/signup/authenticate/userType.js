import React, { useState, useEffect } from 'react';
import { View, FlatList } from "react-native";
import IconButton from './../../cards/iconButton/index.js';
import { Text, Button, Icon } from 'react-native-elements';
import constants from './../../../constants.js';
import { useDispatch } from 'react-redux';
import showToast from './../../../utils/showToast.js';
import { addUserType, clearAuthError } from './../../../store/actions/authActions.js';
import styles from './style.js';

const RegisterUserType = (props) => {

    const dispatch = useDispatch();
    const [userType, setUserType] = useState('');

    const handleUserTypeSelection = (content) => {
        setUserType(content);
    }

    const handleSubmit = () => {
        dispatch(addUserType(userType, props.route.params.user)).then(({payload})=>{
            if(payload.error){
                showToast('error','Try again later');
            } else {
                showToast('success','Congratulations! Your profile was updated');
            }
        });
    }

    const userTypeData = [
        {
            index:1,
            title: constants.Labels.Landlord,
            value: constants.Labels.Landlord,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:2,
            title: constants.Labels.Tenant,
            value: constants.Labels.Tenant,
            icon: {type: 'ionicons', name: 'home'},
        },
    ];

    return(
        <>
        <View  style={{padding:'10%'}}>
            <Text h4 style={styles.headText}>Are you a</Text>
            <FlatList
                style={styles.flatListContainer}
                data={userTypeData}
                renderItem={({ item }) => 
                    <IconButton title={item.title}
                        value={item.value}  
                        icon={item.icon}
                        onPress={handleUserTypeSelection}
                        {...(userType === item.value &&
                            { backgroundColor: OmniHouseTheme.palette.primary.vector})}
                    />}
                keyExtractor={item => item.index}
                numColumns={2}
                />
        </View>
        <View style={styles.buttonContainer}>
            <Button
                icon={
                    <Icon
                        name='navigate-next'
                        type='materialicons'
                        size={OmniHouseTheme.spacing(4)}
                        color={OmniHouseTheme.palette.primary.font}
                    />
                }
                iconRight
                type="clear"
                titleStyle={styles.nextButtonTitle}
                buttonStyle={styles.nextButton}
                title="Next"
                onPress={handleSubmit}/>
        </View>
        </>
    )
}

export default RegisterUserType;