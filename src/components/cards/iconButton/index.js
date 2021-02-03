import React from 'react';
import { View, TouchableOpacity } from "react-native";
import { Icon, Image, Text } from 'react-native-elements';
import styles from './iconButton.style.js';

const IconButton = (props) => {

    const handlePress = () => {
        console.log(props.title);
        props.buttonPress(props.title);
    } 

    return(
        <TouchableOpacity  style={styles.buttonContainer} onPress={handlePress}>
            {
                (
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