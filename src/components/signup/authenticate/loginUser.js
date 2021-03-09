import React, { useState } from 'react';
import { View, TextInput } from "react-native";
import { Formik } from 'formik';
import { firebase } from './../../../firebase/firebase.js';
import * as Yup from 'yup';
import { Input, Button } from 'react-native-elements';
import constants from './../../../constants.js';
import { useDispatch } from 'react-redux';
import showToast from './../../../utils/showToast.js';
import CustomIcon from '../../iconSet/customIcon.js';
import { loginUser, clearAuthError } from './../../../store/actions/authActions.js';
import OmniHouseTheme from './../../../styles/theme.js';
import styles from './style.js';

const LoginUser = (props) => {

    const dispatch = useDispatch();

    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [securEntry, setSecurEntry] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (values) => {
        setLoading(true);
        dispatch(loginUser(values)).then(({payload})=>{
            setLoading(false);
            if(payload.error){
                showToast('error', payload.error);
                dispatch(clearAuthError());
            } else {
                showToast('success', 'Congrats! Login successful.');
                props.navigation.navigate('RegisterUserType',{
                    user:payload.user
                })
            }
        });
    }

    async function handleMobileSubmit(phoneNumber) {
        var reCaptcha = firebase.auth.RecaptchaVerifier();
        const confirmation = await firebase.auth().signInWithPhoneNumber(phoneNumber, reCaptcha);
        setConfirm(confirmation);
    }
    async function confirmCode() {
        try {
          await confirm.confirm(code);
        } catch (error) {
        }
      }

    return(
        props.route.params.signInMode === constants.Email?
        <>
        <View style={styles.iconContainer}>
                <CustomIcon name='homebutton' width={OmniHouseTheme.spacing(10)}
                    height={OmniHouseTheme.spacing(10)} />
        </View>
        <Formik
            initialValues={{
                email:'',
                password:''
            }}
            // validationSchema={
            //     Yup.object().shape({
            //     email: Yup.string()
            //         .email('Email is invalid')
            //         .required('Email is required'),
            //     password: Yup.string()
            //         .required('Password is required')
            // })}
            onSubmit={ values => handleSubmit(values)}>
                 {({handleChange, handleBlur, handleSubmit, values, touched, errors})=>(
                    <View style={{padding:'10%'}}>

                        <Input
                            containerStyle={styles.inputContainer}
                            inputContainerStyle={styles.inputBoxContainer}
                            labelStyle={styles.inputLabelStyle}
                            style={styles.inputBoxText}
                            placeholder="Enter your email"
                            leftIcon={{type:'MaterialIcons', name:'email', color:'white'}}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            renderErrorMessage={errors.email && touched.email}
                            errorStyle={{ color: 'red' }}
                            errorMessage={errors.email} />

                        <Input
                            containerStyle={styles.inputContainer}
                            inputContainerStyle={styles.inputBoxContainer}
                            labelStyle={styles.inputLabelStyle}
                            style={styles.inputBoxText}
                            placeholder="Enter your password"
                            leftIcon={{type:'MaterialIcons', name:'fingerprint', color:'white'}}
                            rightIcon={{
                                type:'antdesign',
                                name:securEntry ? 'eye':'eyeo',
                                color: 'white',
                                onPress:()=> setSecurEntry(!securEntry)
                            }}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={securEntry}
                            renderErrorMessage={errors.password && touched.password}
                            errorStyle={{ color: 'red' }}
                            errorMessage={errors.password} />

                        <Button
                            title="Log In"
                            loading={loading}
                            onPress={handleSubmit}/>
                    </View>
             )}
        </Formik>
        </>
        :
        props.route.params.signInMode === constants.Phone
        ?
        !confirm?
        <>
          <Formik
            initialValues={{
                mobile:''
            }}
            validationSchema={
                Yup.object().shape({
                    mobile: Yup.string()
                    .min(6, 'Mobile must be at least 7 characters')
                    .max(10, 'Mobile must be at max 10 characters')
                    .required('Mobile is required')
            })}
            onSubmit={ values => handleMobileSubmit(values.mobile)}>
                 {({handleChange, handleBlur, handleSubmit, values, touched, errors})=>(
                    <View style={{padding:'10%'}}>

                        <Input
                            placeholder="Enter your number"
                            keyboardType='phone-pad'
                            leftIcon={{type:'MaterialIcons', name:'call'}}
                            onChangeText={handleChange('mobile')}
                            onBlur={handleBlur('mobile')}
                            value={values.mobile}
                            renderErrorMessage={errors.mobile && touched.mobile}
                            errorStyle={{ color: 'red' }}
                            errorMessage={errors.mobile} />

                        <Button
                            title="Log In"
                            onPress={handleSubmit}/>
                    </View>
             )}
        </Formik>
        </>
        :
        <>
            <TextInput value={code} onChangeText={text => setCode(text)} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
        :
        <></>
    )
}

export default LoginUser;