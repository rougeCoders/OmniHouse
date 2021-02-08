import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import { Formik } from 'formik';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { addPropertyAddress } from '../../../../store/actions/addPropertyAction.js';

const Screen3 = (props) => {

    const propertyAddress = useSelector(state => state.addProperty);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(addPropertyAddress(values))
        props.navigation.navigate('Screen4');
    }

    return (
        <View style={styles.formContainer}>
            <Formik
                initialValues={{
                    addressLine1: propertyAddress.address.addressLine1,
                    addressLine2: propertyAddress.address.addressLine2,
                    city: propertyAddress.address.city,
                    postcode: propertyAddress.address.postcode
                }}
                onSubmit={ values => handleSubmit(values)} >
                    {({handleChange, handleBlur, handleSubmit, setFieldValue, values})=>(
                        <View style={{padding:'10%'}}>
                            <Text h4 style={styles.headText}>Address of property</Text>
                            <Input
                                placeholder="1st Line of Address"
                                onChangeText={handleChange('addressLine1')}
                                onBlur={handleBlur('addressLine1')}
                                value={values.addressLine1}
                                rightIcon={values.addressLine1 !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={28}
                                        color="black"
                                        onPress={() => setFieldValue('addressLine1', '')}
                                    />
                                )}
                             />
                            
                            <Input
                                placeholder="2nd Line of Address"
                                onChangeText={handleChange('addressLine2')}
                                onBlur={handleBlur('addressLine2')}
                                value={values.addressLine2}
                                rightIcon={values.addressLine2 !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={28}
                                        color="black"
                                        onPress={() => setFieldValue('addressLine2', '')}
                                    />
                                )}
                             />

                            <Input
                                placeholder="City"
                                onChangeText={handleChange('city')}
                                onBlur={handleBlur('city')}
                                value={values.city}
                                rightIcon={values.city !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={28}
                                        color="black"
                                        onPress={() => setFieldValue('city', '')}
                                    />
                                )}
                             />

                            <Input
                                placeholder="Pincode"
                                onChangeText={handleChange('postcode')}
                                onBlur={handleBlur('postcode')}
                                value={values.postcode}
                                rightIcon={values.postcode !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={28}
                                        color="black"
                                        onPress={() => setFieldValue('postcode', '')}
                                    />
                                )}
                             />
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
                    )}
            </Formik>
        </View>
    )
}

export default Screen3;