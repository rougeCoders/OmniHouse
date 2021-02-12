import React, { useState,useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import DropDown from './../../../dropdown/index.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { addPropertyAddress } from '../../../../store/actions/addPropertyAction.js';
import OmniHouseTheme from '../../../../styles/theme.js';

const Screen2 = (props) => {

    const propertyAddress = useSelector(state => state.addProperty.address);
    const dispatch = useDispatch();
    const initialValues = {
        addressLine1: '',
        addressLine2: '',
        city: '',
        postcode: propertyAddress.postcode
    }

    const [address, setAddress] = useState(initialValues);

    const updateAddress = (item) => {
        setAddress({...address, ...item});
    }

    const handleSubmit = () => {
        dispatch(addPropertyAddress(address))
        props.navigation.navigate('Screen3');
    }

    let items=[
        {label: 'Test1, Address, Random1', value: {addressLine1: 'Test1', addressLine2: 'Address', city:'Random1'}},
        {label: 'Test2, Address, Random2', value: {addressLine1: 'Test2', addressLine2: 'Address', city:'Random2'}},
        {label: 'Test3, Address, Random3', value: {addressLine1: 'Test3', addressLine2: 'Address', city:'Random3'}},
    ];

    return (
        <View style={styles.formContainer}>
            <View style={{padding:'10%'}}>
                <Text h4 style={styles.headText}>Select your property’s address</Text>

                <DropDown
                    items={items}
                    onChangeItem={value => updateAddress(value)}
                    />
                <Text h5 style={styles.conditionText}>OR</Text>
                <Text h5 style={styles.conditionText}>ADD ADDRESS MANUALLY</Text>
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
            </View>
        </View>
    )
}

export default Screen2;