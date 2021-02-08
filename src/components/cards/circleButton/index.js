import React from 'react';
import { TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import styles from './circleButton.style.js';

const CircleButton = (props) => {
    buttonStyle = styles(props);
    const handlePress = () => {
        props.buttonPress(props.value);
    } 

    return(
        <TouchableOpacity       
            style={[buttonStyle.buttonContainer, props.disabled && buttonStyle.disabled,
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
        </TouchableOpacity>
    )
}

export default CircleButton;