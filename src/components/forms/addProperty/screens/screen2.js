import React, { useState,useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { addPropertyAddress } from '../../../../store/actions/addPropertyAction.js';

const Screen2 = (props) => {

    const dispatch = useDispatch();

    const initialValues = {
        addressLine1: '',
        addressLine2: '',
        city: ''
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

                <DropDownPicker
                    items={items}
                    containerStyle={{height: 40}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    onChangeItem={item => updateAddress(item.value)}
                    />
                <Text h5 style={styles.conditionText}>OR</Text>
                <Text h5 style={styles.conditionText}>ADD ADDRESS MANUALLY</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        icon={
                            <Icon
                                name='navigate-next'
                                type='materialicons'
                                size={30}
                                color="white"
                            />
                            }
                        iconRight
                        type="clear"
                        titleStyle={{color:'white'}}
                        buttonStyle={styles.nextButton}
                        title="Next"
                        onPress={handleSubmit}/>
                </View>
            </View>
        </View>
    )
}

export default Screen2;