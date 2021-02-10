import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import { Formik } from 'formik';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { addPropertyAddress } from '../../../../store/actions/addPropertyAction.js';
import OmniHouseTheme from '../../../../styles/theme.js';

const Screen3 = (props) => {

    const propertyAddress = useSelector(state => state.addProperty.address);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(addPropertyAddress(values))
        props.navigation.navigate('Screen4');
    }

    return (
        <View style={styles.formContainer}>
            <Formik
                initialValues={{
                    addressLine1: propertyAddress.addressLine1,
                    addressLine2: propertyAddress.addressLine2,
                    city: propertyAddress.city,
                    postcode: propertyAddress.postcode
                }}
                onSubmit={ values => handleSubmit(values)} >
                    {({handleChange, handleBlur, handleSubmit, setFieldValue, values})=>(
                        <View style={{padding:'10%'}}>
                            <Text h4 style={styles.headText}>Address of property</Text>
                            <Input
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={styles.inputBoxContainer}
                                labelStyle={styles.inputLabelStyle}
                                style={styles.inputBoxText}
                                label="1st Line of Address"
                                placeholder="1st Line of Address"
                                onChangeText={handleChange('addressLine1')}
                                onBlur={handleBlur('addressLine1')}
                                value={values.addressLine1}
                                rightIcon={values.addressLine1 !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={OmniHouseTheme.spacing(4)}
                                        color={OmniHouseTheme.palette.primary.font}
                                        onPress={() => setFieldValue('addressLine1', '')}
                                    />
                                )}
                             />
                            
                            <Input
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={styles.inputBoxContainer}
                                labelStyle={styles.inputLabelStyle}
                                style={styles.inputBoxText}
                                label="2nd Line of Address"
                                placeholder="2nd Line of Address"
                                onChangeText={handleChange('addressLine2')}
                                onBlur={handleBlur('addressLine2')}
                                value={values.addressLine2}
                                rightIcon={values.addressLine2 !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={OmniHouseTheme.spacing(4)}
                                        color={OmniHouseTheme.palette.primary.font}
                                        onPress={() => setFieldValue('addressLine2', '')}
                                    />
                                )}
                             />

                            <Input
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={styles.inputBoxContainer}
                                labelStyle={styles.inputLabelStyle}
                                style={styles.inputBoxText}
                                label="City"
                                placeholder="City"
                                onChangeText={handleChange('city')}
                                onBlur={handleBlur('city')}
                                value={values.city}
                                rightIcon={values.city !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={OmniHouseTheme.spacing(4)}
                                        color={OmniHouseTheme.palette.primary.font}
                                        onPress={() => setFieldValue('city', '')}
                                    />
                                )}
                             />

                            <Input
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={styles.inputBoxContainer}
                                labelStyle={styles.inputLabelStyle}
                                style={styles.inputBoxText}
                                label="Postcode"
                                placeholder="Postcode"
                                onChangeText={handleChange('postcode')}
                                onBlur={handleBlur('postcode')}
                                value={values.postcode}
                                rightIcon={values.postcode !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={OmniHouseTheme.spacing(4)}
                                        color={OmniHouseTheme.palette.primary.font}
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
                    )}
            </Formik>
        </View>
    )
}

export default Screen3;