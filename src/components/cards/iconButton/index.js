import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from "react-native";
import { Icon, Text } from 'react-native-elements';
import styles from './iconButton.style.js';

const IconButton = (props) => {

    const handlePress = () => {
        props.onPress(props.value);
    } 

    return(
        <View style={styles.iconButtonContainer}>
            <TouchableOpacity       
                style={[styles.buttonContainer, props.FlatButton && styles.buttonFlat,
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
                <Text h5 style={styles.titleText}>{props.title}</Text>
            </TouchableOpacity>
            { props.text !== undefined &&
                <Text style={styles.supportText}>{props.text}</Text>     
            }
        </View>
    )
}

IconButton.propTypes = {
    /**
     * title of the card
     */
    title: PropTypes.string,
    /**
     * value of the card
     */
    value: PropTypes.string,
    /**
     * text below the card
     */
    text: PropTypes.string,
    /**
     * icon details
     */
    icon: PropTypes.shape({
        /**
        * name of icon
        */
        name: PropTypes.string,
        /**
        * type of icon
        */
        type: PropTypes.string,
        /**
        * color of icon
        */
        color: PropTypes.string,
    }),
    /**
     * backgroundColor of component
     */
    backgroundColor: PropTypes.string,
    /**
     *  Returns the value
     */
    onPress: PropTypes.func,
    /**
     *  If card is rectangular
     */
    FlatButton: PropTypes.bool,
  };

export default IconButton;