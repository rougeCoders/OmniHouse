import React from 'react';
import { View, TouchableOpacity } from "react-native";
import { Text } from 'react-native-elements';
import styles from './buttonCard.style.js';

const ButtonCard = (props) => {

    console.log(props);
    const handlePress = () => {
        if(props.ScreenLink !== undefined && props.ScreenLink !== '') {
            props.navigation.navigate(props.ScreenLink);
        }

    } 
    return(
        <View style={styles.buttonContainer} >
            <TouchableOpacity onPress={ handlePress }>
                <Text>{props.Title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonCard;