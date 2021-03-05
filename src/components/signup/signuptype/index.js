import React, { useState } from 'react';
import { View } from "react-native";
import { Text, Button } from 'react-native-elements';
import constants from '../../../constants.js';
import styles from './signuptype.style.js';
import CustomIcon from './../../iconSet/customIcon.js';
import Img from './../../../assets/images/Image.svg';


const SelectSignUpType = (props) => {

    const [isLoginForm, setIsLoginForm] = useState(false);

    return(
        <>
        <Img width="100%"
            height="80%"
                />
        <View style={styles.container}>  
            <Text h3 style={styles.text}>Take back control.</Text>
             
            <Button title="Continue with phone" buttonStyle={[styles.signupButton, {backgroundColor: '#93227F'}]}
                icon={<CustomIcon name='phone' />}
                titleStyle={styles.signupButtonIconTitle}
                containerStyle={styles.buttonContainer}
                onPress={()=> props.navigation.navigate(isLoginForm?'LoginUser':'RegisterUser',{
                    signInMode:constants.Phone
                })}/>
            <Button title="Continue with email" buttonStyle={[styles.signupButton, {backgroundColor: '#A01E5B'}]}
                icon={<CustomIcon name='email' />}
                titleStyle={styles.signupButtonIconTitle}
                containerStyle={styles.buttonContainer}
                onPress={()=> props.navigation.navigate(isLoginForm?'LoginUser':'RegisterUser',{
                    signInMode:constants.Email
                })}/>
            <Button title="Google" buttonStyle={styles.signupButton}
                type='outline' disabled
                containerStyle={styles.buttonContainer}
                 onPress={()=> props.navigation.navigate('LoginUser',{
                    signInMode:constants.Google
                })}/>
            <Button title="Facebook" buttonStyle={styles.signupButton}
                type='outline' disabled
                containerStyle={styles.buttonContainer}
                 onPress={()=> props.navigation.navigate('LoginUser',{
                    signInMode:constants.Facebook
                })}/>
            
            <Button title={isLoginForm ? 'Not registered yet? Register here' : 'Need to sign in?'}
                buttonStyle={styles.signupButton}
                type="clear"
                onPress={()=> setIsLoginForm(!isLoginForm)}/>

            <Text style={styles.text}>By continuing you agree to Omnihouse’s Terms of Services & Privacy Policy</Text>

        </View>
        </>
    )
}

export default SelectSignUpType