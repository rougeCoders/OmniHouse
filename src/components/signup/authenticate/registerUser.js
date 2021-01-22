import React, { useState, useEffect } from 'react';
import { View } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import showToast from './../../../utils/showToast.js';
import { registerUser, clearAuthError } from '../../../store/actions/authActions.js';

const RegisterUser = (props) => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const SignUpSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
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


    const handleSubmit = (values) => {
        setLoading(true);
        dispatch(registerUser(values)).then(({payload})=>{
            setLoading(false);
            if(payload.error){
                showToast('error','Ups !!','Try again later');
                dispatch(clearAuthError());
            } else {
                showToast('success','Congratulations','Your profile was updated');
                props.navigation.navigate('RegisterUserType',{
                    user:payload.user
                })
            }
        });
    }

    return(
        <ScrollView>
            <Formik
                initialValues={{
                    firstName:'',
                    lastName:'',
                    phone:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                }}
                validationSchema={ SignUpSchema } 
                onSubmit={values => handleSubmit(values)}>
                    {({handleChange, handleBlur, handleSubmit, values, touched, errors})=>(
                        <View style={{padding:'10%'}}>
                            <Input
                                placeholder="Enter your firstname"
                                leftIcon={{type:'MaterialIcons', name:'email'}}
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                                renderErrorMessage={errors.firstName && touched.firstName}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.firstName} />
                            
                            <Input
                                placeholder="Enter your lastName"
                                leftIcon={{type:'MaterialIcons', name:'email'}}
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName}
                                renderErrorMessage={errors.lastName && touched.lastName}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.lastName} />

                            <Input
                                placeholder="Enter your email"
                                leftIcon={{type:'MaterialIcons', name:'email'}}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                renderErrorMessage={errors.email && touched.email}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.email} />

                            <Input
                                placeholder="Enter your phone"
                                keyboardType='phone-pad'
                                leftIcon={{type:'Ionicons', name:'call'}}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                renderErrorMessage={errors.phone && touched.phone}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.phone} />

                            <Input
                                placeholder="Enter your password"
                                leftIcon={{type:'MaterialIcons', name:'fingerprint'}}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={true}
                                renderErrorMessage={errors.password && touched.password}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.password} />

                            <Input
                                placeholder="Confirm your password"
                                leftIcon={{type:'MaterialIcons', name:'fingerprint'}}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={true}
                                renderErrorMessage={errors.confirmPassword && touched.confirmPassword}
                                errorStyle={{ color: 'red' }}
                                errorMessage={errors.confirmPassword} />

                            <Button
                                title="Sign up"
                                loading={loading}
                                onPress={handleSubmit}/>
                        </View>
                )}
            </Formik>
        </ScrollView>
    )
}

export default RegisterUser;