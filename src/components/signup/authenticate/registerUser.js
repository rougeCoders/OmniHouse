import React, { useState, useEffect } from 'react';
import { View } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ScrollView } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import constants from '../../../constants.js';
import showToast from './../../../utils/showToast.js';
import { registerUser, clearAuthError } from '../../../store/actions/authActions.js';
import CustomIcon from '../../iconSet/customIcon.js';
import OmniHouseTheme from './../../../styles/theme.js';
import styles from './style.js';

const RegisterUser = (props) => {

    const signInMode = props.route.params.signInMode;
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const PhoneSignUpSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        phone: Yup.string()
            .min(6, 'Mobile must be at least 7 characters')
            .max(10, 'Mobile must be at max 10 characters')
            .required('Mobile is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });

    const EmailSignUpSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });


    const handleSubmit = (values) => {
        setLoading(true);

        if(signInMode === constants.Phone)
        {}
        else
        {
            console.log(values);
            dispatch(registerUser(values)).then(({payload})=>{
                setLoading(false);
                if(payload.error){
                    showToast('error', payload.error);
                    dispatch(clearAuthError());
                } else {
                    showToast('success', 'Congrats! You are register now.');
                    props.navigation.navigate('RegisterUserType',{
                        user:payload.user
                    })
                }
            });
        }
    }

    return(
        <ScrollView style={{alignContent:'center'}}>
            <View style={styles.iconContainer}>
                <CustomIcon name='homebutton' width={OmniHouseTheme.spacing(10)}
                    height={OmniHouseTheme.spacing(10)} />
            </View>
            <Formik
                initialValues={{
                    name:'',
                    phone:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                }}
                //validationSchema={ signInMode === constants.Phone ? PhoneSignUpSchema: EmailSignUpSchema } 
                onSubmit={values => handleSubmit(values)}>
                    {({handleChange, handleBlur, handleSubmit, setFieldValue, values, touched, errors})=>(
                        <View style={{padding:'10%'}}>
                            <Input
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={styles.inputBoxContainer}
                                labelStyle={styles.inputLabelStyle}
                                style={styles.inputBoxText}
                                placeholder="Your Name"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                rightIcon={values.name !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={OmniHouseTheme.spacing(4)}
                                        color={OmniHouseTheme.palette.primary.font}
                                        onPress={() => setFieldValue('name', '')}
                                    />
                                )}
                                renderErrorMessage={errors.name && touched.name}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.name} />
                            
                            {signInMode === constants.Email && (
                            <Input
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={styles.inputBoxContainer}
                                labelStyle={styles.inputLabelStyle}
                                style={styles.inputBoxText}
                                placeholder="Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                rightIcon={values.email !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={OmniHouseTheme.spacing(4)}
                                        color={OmniHouseTheme.palette.primary.font}
                                        onPress={() => setFieldValue('email', '')}
                                    />
                                )}
                                renderErrorMessage={errors.email && touched.email}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.email} />
                            )}

                            {signInMode === constants.Phone && (
                            <Input
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={styles.inputBoxContainer}
                                labelStyle={styles.inputLabelStyle}
                                style={styles.inputBoxText}
                                placeholder="Phone"
                                keyboardType='phone-pad'
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                rightIcon={values.phone !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={OmniHouseTheme.spacing(4)}
                                        color={OmniHouseTheme.palette.primary.font}
                                        onPress={() => setFieldValue('phone', '')}
                                    />
                                )}
                                renderErrorMessage={errors.phone && touched.phone}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.phone} />
                            )}

                            <Input
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={styles.inputBoxContainer}
                                labelStyle={styles.inputLabelStyle}
                                style={styles.inputBoxText}
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                rightIcon={values.password !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={OmniHouseTheme.spacing(4)}
                                        color={OmniHouseTheme.palette.primary.font}
                                        onPress={() => setFieldValue('password', '')}
                                    />
                                )}
                                secureTextEntry={true}
                                renderErrorMessage={errors.password && touched.password}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.password} />

                            <Input
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={styles.inputBoxContainer}
                                labelStyle={styles.inputLabelStyle}
                                style={styles.inputBoxText}
                                placeholder="Repeat password"
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                rightIcon={values.confirmPassword !== '' && (
                                    <Icon
                                        name='close'
                                        type='ionicons'
                                        size={OmniHouseTheme.spacing(4)}
                                        color={OmniHouseTheme.palette.primary.font}
                                        onPress={() => setFieldValue('confirmPassword', '')}
                                    />
                                )}
                                secureTextEntry={true}
                                renderErrorMessage={errors.confirmPassword && touched.confirmPassword}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.confirmPassword} />

                            <Button
                                buttonStyle={[styles.signupButton,signInMode === constants.Phone && styles.signupButtonMobile]}
                                titleStyle={styles.signupButtonIconTitle}
                                title="Sign up"
                                icon={<CustomIcon name={signInMode === constants.Phone? 'phone':'email'} />}
                                loading={loading}
                                onPress={handleSubmit}/>
                        </View>
                )}
            </Formik>
        </ScrollView>
    )
}

export default RegisterUser;