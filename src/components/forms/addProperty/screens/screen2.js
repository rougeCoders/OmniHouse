import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Formik } from 'formik';

const Screen2 = (props) => {

    const handleSubmit = (values) => {
        props.nextStep({step: values.step});
    }

    return (
        <View>
            <Formik
                initialValues={{
                    step: props.propertyDetails.step + 1,
                    pincode: ''
                }}
                onSubmit={ values => handleSubmit(values)} >
                    {({handleChange, handleBlur, handleSubmit, values})=>(
                        <View style={{padding:'10%'}}>
                            <Input
                                placeholder="Whats your pincode?"
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

export default Screen2;