import React from 'react';
import { View, TouchableOpacity, Animated } from "react-native";
import { Avatar, Badge, Image, Text } from 'react-native-elements';
import styles from './propertyCard.style.js';

const PropertyCard = (props) => {
    
    const handlePress = () => {
        alert('pressed');
    } 
    return(
        <TouchableOpacity style={styles.buttonContainer} >
            <View>
                <Avatar rounded
                    size='medium'
                    source={props.ImageUri} />
            </View>
            <View>
                <Text h4>{props.Address}</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.progrssBarContainer}>
                        <Animated.View style={[styles.progressBar,
                            {width: props.PerCompleted + '%'}]} />
                    </View>
                    <Animated.Text style={styles.progressText}>
                        {props.PerCompleted}%
                    </Animated.Text>
                </View>
            </View>
            <View>
                <Text h5>LIVE</Text>
            </View>
            <View>
                <Badge
                    status='error'
                    size="large"
                    value={props.Notifications > 1 ? props.Notifications : null}
                />
            </View>
        </TouchableOpacity>
    )
}

export default PropertyCard;