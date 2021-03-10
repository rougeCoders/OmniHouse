import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight } from "react-native";
import { Text } from 'react-native-elements';
import CustomIcon from '../../iconSet/customIcon.js';
import styles from './imageCard.style.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ImageCard = (props) => {
    
    const handlePress = () => {
        if(props.ScreenLink !== undefined && props.ScreenLink !== '') {
            props.navigation.navigate(props.ScreenLink);
        }
    } 
    return(
        <View style={styles.buttonContainer} >
                <TouchableOpacity style={[styles.imageIcon,
                    {...(props.backgroundColor !== undefined
                        && { backgroundColor: props.backgroundColor})}]}
                        onPress={handlePress} >
                        {    
                            props.icon && (
                                <CustomIcon name={props.icon.name}/>
                            )
                        }
                    </TouchableOpacity>
            <Text style={styles.buttonText}>{props.title}</Text>
        </View>
    )
}

ImageCard.propTypes = {
    /**
     * title of the card
     */
    title: PropTypes.string,
    /**
     * icon details
     */
    icon: PropTypes.shape({
        /**
        * name of icon
        */
        name: PropTypes.string,
        /**
        * color of icon
        */
        color: PropTypes.string,
    }),
    /**
     * backgroundColor of component
     */
    backgroundColor: PropTypes.string,
  };

export default ImageCard;