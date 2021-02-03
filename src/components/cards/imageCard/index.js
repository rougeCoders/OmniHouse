import React from 'react';
import { View } from "react-native";
import { Image, Text } from 'react-native-elements';
import styles from './imageCard.style.js';

const ImageCard = (props) => {
    
    const handlePress = () => {
        if(props.ScreenLink !== undefined && props.ScreenLink !== '') {
            props.navigation.navigate(props.ScreenLink);
        }
    } 
    return(
        <View style={styles.buttonContainer} >
                <Image source={props.ImageUri}
                    style={styles.imageIcon}
                    onPress={handlePress} />
            <Text>{props.Title}</Text>
        </View>
    )
}

export default ImageCard;