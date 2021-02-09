import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { addPostcode } from '../../../../store/actions/addPropertyAction.js';
import { cos } from 'react-native-reanimated';

const Screen1 = (props) => {

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const address = { postcode: values.postcode}
        dispatch(addPostcode(address));
        props.navigation.navigate('Screen2');
    }

    return (
        <View style={styles.formContainer}>
            <Formik
                initialValues={{
                    postcode: ''
                }}
                validationSchema={
                    Yup.object().shape({
                        postcode: Yup.string()
                        .required('Postcode is required')
                })}
                onSubmit={ values => handleSubmit(values)} >
                    {({handleChange, handleBlur, handleSubmit, values, touched, errors})=>(
                        <View style={{padding:'10%'}}>
                            <Text h4 style={styles.headText}>Enter postcode of the  property </Text>
                            <Input
                                placeholder="e.g.  SW13 7NP"
                                onChangeText={handleChange('postcode')}
                                onBlur={handleBlur('postcode')}
                                value={values.pincode}
                                renderErrorMessage={errors.postcode && touched.postcode}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.postcode}
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