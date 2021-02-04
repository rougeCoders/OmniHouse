import React from 'react';
import { View, TouchableOpacity } from "react-native";
import { Icon, Image, Text } from 'react-native-elements';
import styles from './iconButton.style.js';

const IconButton = (props) => {

    const handlePress = () => {
        props.buttonPress(props.value);
    } 

    return(
        <TouchableOpacity       
            style={[styles.buttonContainer,
                {...(props.backgroundColor !== undefined
                    && { backgroundColor: props.backgroundColor})}]}
                onPress={handlePress}>
            {
                props.icon !== undefined && (
                    <Icon
                        name={props.icon.name}
                        type={props.icon.type}
                        color={props.icon.color? props.icon.color : 'white'}
                        />
                )
            }
            {    
                props.Image && (
                    <Image source={props.image.imageUri}
                        style={styles.imageIcon} />
                )
            }
            <Text h5 style={styles.titleText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default IconButton;