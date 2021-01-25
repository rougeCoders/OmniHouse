import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Formik } from 'formik';

const Screen3 = (props) => {

    const handleSubmit = (values) => {
        props.nextStep(values);
    }

    return (
        <View>
            <Formik
                initialValues={{
                    step: props.propertyDetails.step + 1,
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    pincode: props.propertyDetails.pincode
                }}
                onSubmit={ values => handleSubmit(values)} >
                    {({handleChange, handleBlur, handleSubmit, values})=>(
                        <View style={{padding:'10%'}}>
                            <Input
                                placeholder="1st Line of Address"
                                onChangeText={handleChange('addressLine1')}
                                onBlur={handleBlur('addressLine1')}
                                value={values.addressLine1}
                             />
                            
                            <Input
                                placeholder="2nd Line of Address"
                                onChangeText={handleChange('addressLine2')}
                                onBlur={handleBlur('addressLine2')}
                                value={values.addressLine2}
                             />

                            <Input
                                placeholder="City"
                                onChangeText={handleChange('city')}
                                onBlur={handleBlur('city')}
                                value={values.city}
                             />

                            <Input
                                placeholder="Pincode"
                                onChangeText={handleChange('pincode')}
                                onBlur={handleBlur('pincode')}
                                value={values.pincode}
                             />
                            <Button
                                title="Next"
                                onPress={handleSubmit}/>
                        </View>
                    )}
            </Formik>
        </View>
    )
}

export default Screen3;