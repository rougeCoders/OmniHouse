import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import { Formik } from 'formik';
import styles from './forms.Style.js';

const Screen1 = (props) => {

    const handleSubmit = (values) => {
        props.nextStep(values);
    }

    return (
        <View style={styles.formContainer}>
            <Formik
                initialValues={{
                    step: props.propertyDetails.step + 1,
                    pincode: ''
                }}
                onSubmit={ values => handleSubmit(values)} >
                    {({handleChange, handleBlur, handleSubmit, values})=>(
                        <View style={{padding:'10%'}}>
                            <Text h4>Enter postcode of the property</Text>
                            <Input
                                placeholder="e.g.  SW13 7NP"
                                onChangeText={handleChange('pincode')}
                                onBlur={handleBlur('pincode')}
                                value={values.pincode}
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

export default Screen1;