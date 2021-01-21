import React, { useState } from 'react';
import { Text, View } from "react-native";
import { Button } from 'react-native-elements';
import { Divider } from 'react-native-paper';
import constants from '../../../constants.js';
import styles from './signuptype.style.js';

const SelectSignUpType = (props) => {

    const [isLoginForm, setIsLoginForm] = useState(true);

    return(
        <View style={styles.container}>
            <Text>Select one:</Text>
            <Divider/>
            
            <Button title="Email" buttonStyle={styles.signupButton} 
                onPress={()=> props.navigation.navigate(isLoginForm?'LoginUser':'RegisterUser',{
                    signInMode:constants.Email
                })}/>

            {isLoginForm ?
            <>  
            <Button title="Phone" buttonStyle={styles.signupButton}
                 onPress={()=> props.navigation.navigate('LoginUser',{
                    signInMode:constants.Phone
                })}/>
            <Button title="Google" buttonStyle={styles.signupButton} disabled
                 onPress={()=> props.navigation.navigate('LoginUser',{
                    signInMode:constants.Google
                })}/>
            <Button title="Facebook" buttonStyle={styles.signupButton} disabled
                 onPress={()=> props.navigation.navigate('LoginUser',{
                    signInMode:constants.Facebook
                })}/>
            </>
            :
            <></>
            }
            
            <Button title={isLoginForm ? 'Not registered yet? Register here' : 'Need to sign in?'}
                buttonStyle={styles.signupButton}
                type="clear"
                onPress={()=> setIsLoginForm(!isLoginForm)}/>

        </View>
    )
}

export default SelectSignUpType